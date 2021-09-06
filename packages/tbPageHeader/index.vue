<!--
 * @Author: your name
 * @Date: 2021-09-03 09:15:46
 * @LastEditTime: 2021-09-03 15:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbPageHeader/index.vue
-->
<template>
  <div class="tb-page-header">
    <div class="tb-page-header__left" @click="backClick">
      <i class="iconfont icon-direction-left"></i>
      <div class="tb-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="tb-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbPageHeader',
  props: {
    title: {
      type: String,
      default() {
        return '返回'
      },
    },
    content: String,
  },
  emits: ['back'],
  setup(props, context) {
    const data = reactive({})

    const refData = toRefs(data)
    // 点击返回事件
    const backClick = context.emit('back')
    return { ...refData, backClick }
  },
})
</script>

<style lang="scss" >
@import './index.scss';
</style>
