<!--
 * @Author: your name
 * @Date: 2021-08-23 14:38:20
 * @LastEditTime: 2021-08-23 14:43:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbHeader/index.vue
-->
<template>
  <div v-on="$attrs" class="tb-header header" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbHeader',
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
