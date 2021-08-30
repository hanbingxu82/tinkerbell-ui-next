<!--
 * @Author: your name
 * @Date: 2021-08-27 15:38:28
 * @LastEditTime: 2021-08-30 10:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbShowmore/index.vue
-->
<template>
  <span class="tb__show-more">
    <span>{{ filterText }}</span>
    <a class="tb__show" @click="showMore" v-if="tbTextLen !== -1 && tbTextLen < text.length">{{ showText }}</a>
    <a class="tb__hidden" @click="showMore" v-if="tbTextLen !== -1 && tbTextLen === text.length && allowFold">{{ hiddenText }}</a>
  </span>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbShowmore',
  props: {
    // 显示文本的长度  默认不折叠
    len: {
      type: Number,
      default: -1,
    },
    // 文本
    text: {
      type: String,
      default: '',
    },
    // 折叠时需要显示文案
    showText: {
      type: String,
      default: '显示更多',
    },
    // 隐藏时需要显示文案
    hiddenText: {
      type: String,
      default: '收起',
    },
    // 是否需要展示hiddenText  收起效果
    allowFold: Boolean,
  },
  setup(props, context) {
    const data = reactive({
      tbTextLen: props.len,
    })

    const refData = toRefs(data)
    // 计算属性过滤器
    const filterText = computed(() => {
      if (refData.tbTextLen.value !== -1 && refData.tbTextLen.value < props.text.length) {
        return props.text.substring(0, refData.tbTextLen.value) + '...'
      }
      return props.text
    })
    const showMore = () => {
      refData.tbTextLen.value = refData.tbTextLen.value === props.text.length ? props.len : props.text.length
    }
    return { ...refData, filterText, showMore }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
