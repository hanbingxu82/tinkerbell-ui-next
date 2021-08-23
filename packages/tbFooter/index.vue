<!--
 * @Author: your name
 * @Date: 2021-08-23 14:17:59
 * @LastEditTime: 2021-08-23 14:47:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbFooter/index.vue
-->
<template>
  <div v-bind="$attrs" class="tb-footer footer" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, context) {
    const data = reactive({})

    const refData = toRefs(data)

    return { ...refData }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
