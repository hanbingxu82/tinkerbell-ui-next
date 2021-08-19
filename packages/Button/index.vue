<!--
 * @Author: your name
 * @Date: 2021-08-19 10:19:03
 * @LastEditTime: 2021-08-19 13:56:20
 * @LastEditors: Please set LastEditors
 * @Description: tb-button组件
 * @FilePath: /tinkerbell-ui-next/packages/Button/index.vue
-->
<template>
  <div class="tb-button">小仙男按钮</div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, Ref, onMounted } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbButton',
  setup() {
    const data = reactive({})

    const refData = toRefs(data)

    return { ...refData }
  },
})
</script>

<style lang="sass" scoped></style>
