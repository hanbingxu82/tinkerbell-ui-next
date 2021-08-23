<!--
 * @Author: your name
 * @Date: 2021-08-23 14:00:00
 * @LastEditTime: 2021-08-23 14:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbContainer/index.vue
-->
<template>
  <div v-bind="$attrs" :class="`tb-container ${direction === 'vertical' ? 'container-col' : 'container'}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onBeforeMount } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbContainer',
  setup(props, context: any) {
    const data = reactive({
      direction: 'horizontal',
    })
    const refData = toRefs(data)
    
    onBeforeMount(() => {
      // 如果插槽中有header  或者  footer说明是横向的
      context.slots.default().forEach((element: any) => {
        if (/tbHeader|tbFooter/.test(element.tag)) {
          refData.direction.value = 'vertical'
        }
      })
    })
    return { ...refData }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
