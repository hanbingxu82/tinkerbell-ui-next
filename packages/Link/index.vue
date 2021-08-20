<!--
 * @Author: your name
 * @Date: 2021-08-20 15:45:47
 * @LastEditTime: 2021-08-20 16:16:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Link/index.vue
-->
<template>
  <a v-if="!tbIcon && href" :target="target" v-bind="$attrs" :href="href" :class="`tb-link ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot> </a>
  <a v-else-if="tbIcon && href" :target="target" v-bind="$attrs" :href="href" :class="`tb-link ${tbIcon} ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot> </a>
  <span v-else-if="tbIcon && !href" v-bind="$attrs" :class="`tb-link ${tbIcon} ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot></span>
  <span v-else v-bind="$attrs" :class="`tb-link ${tbType} ${tbDisabled} ${tbUnderline}`"> <slot></slot></span>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onBeforeMount } from 'vue'
interface dataProps {}

export default defineComponent({
  name: 'tbLink',
  props: {
    // 颜色
    type: {
      type: String,
      default: '',
    },
    // 链接
    href: {
      type: String,
      default: '',
    },
    // 模式
    target: {
      type: String,
      default: '_blank',
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 下划线
    underline: {
      type: Boolean,
      default: true,
    },
    // 图标按钮
    icon: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const data = reactive({
      tbType: '',
      tbDisabled: '',
      tbUnderline: '',
      tbIcon: '',
    })

    const refData = toRefs(data)

    // 页面加载判断当前按钮类型
    const Ptype = () => {
      if (props.type == 'primary') {
        refData.tbType.value = 'a_primary'
      } else if (props.type == 'success') {
        refData.tbType.value = 'a_success'
      } else if (props.type == 'info') {
        refData.tbType.value = 'a_info'
      } else if (props.type == 'warning') {
        refData.tbType.value = 'a_warning'
      } else if (props.type == 'danger') {
        refData.tbType.value = 'a_danger'
      }
    }
    // 判断是否是禁用
    const PDisabled = () => {
      if (props.disabled) {
        refData.tbDisabled.value = ' is_disabled '
      } else {
        refData.tbDisabled.value = ' '
      }
    }
    // 判断是否有下划线
    const Punderline = () => {
      if (props.underline) {
        refData.tbUnderline.value = ' is_underline '
      } else {
        refData.tbUnderline.value = ' '
      }
    }
    // 页面加载判断是否为图标链接
    const Picon = () => {
      if (props.icon) {
        refData.tbIcon.value = ' iconfont ' + props.icon
      } else {
        refData.tbIcon.value = ''
      }
    }
    onBeforeMount(() => {
      Ptype()
      PDisabled()
      Punderline()
      Picon()
    })

    return { ...refData }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>
