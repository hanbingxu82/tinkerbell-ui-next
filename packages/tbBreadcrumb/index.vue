<!--
 * @Author: your name
 * @Date: 2021-08-30 14:04:27
 * @LastEditTime: 2021-08-30 15:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBreadcrumb/index.vue
-->
<template>
  <div class="tb-breadcrumb">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, provide } from 'vue'

interface dataProps {}
export default defineComponent({
  name: 'tbBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    provide('tbBreadcrumb', props)
    const data = reactive({})
    const refData = toRefs(data)

    return { ...refData }
  },
})
</script>

<style lang="sass">
@import './index.scss';
</style>
