<!--
 * @Author: your name
 * @Date: 2021-08-23 14:18:40
 * @LastEditTime: 2021-08-23 14:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbMain/index.vue
-->
<template>
  <div v-on="$attrs" class="tb-main main">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbMain',
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
