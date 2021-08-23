<!--
 * @Author: your name
 * @Date: 2021-08-23 14:12:58
 * @LastEditTime: 2021-08-23 14:16:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbAside/index.vue
-->
<template>
  <div v-bind="$attrs" class="tb-aside aside" :style="`width:${width};`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbAside',
  props: {
    width: {
      type: String,
      default: '300px',
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
