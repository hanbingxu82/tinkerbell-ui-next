<!--
 * @Author: your name
 * @Date: 2021-08-23 09:58:57
 * @LastEditTime: 2021-08-23 13:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbRow/index.vue
-->
<template>
  <div v-bind="$attrs" :class="`tb-row`" :style="`${tbjustify} ${tbalign}`"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, provide, onBeforeMount } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbRow',
  props: {
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },

  setup(props, context) {
    const data = reactive({
      tbalign: '',
      tbjustify: '',
    })

    const refData = toRefs(data)
    const Pjustify = (): void => {
      if (props.justify == 'start') {
        refData.tbjustify.value = 'justify-content:flex-start;'
      } else if (props.justify == 'center') {
        refData.tbjustify.value = 'justify-content:center;'
      } else if (props.justify == 'end') {
        refData.tbjustify.value = 'justify-content:flex-end;'
      } else if (props.justify == 'space-around') {
        refData.tbjustify.value = 'justify-content:space-around;'
      } else if (props.justify == 'space-between') {
        refData.tbjustify.value = 'justify-content:space-between;'
      } else {
        refData.tbjustify.value = ''
      }
    }
    const Palign = (): void => {
      if (props.align == 'top') {
        refData.tbalign.value = 'align-items:flex-start;'
      } else if (props.align == 'middle') {
        refData.tbalign.value = 'align-items:crenter;'
      } else if (props.align == 'bottom') {
        refData.tbalign.value = 'align-items:flex-end;'
      } else {
        refData.tbalign.value = ''
      }
    }
    onBeforeMount(() => {
      Pjustify()
      Palign()
    })

    provide('tbrow', { ...refData, Pjustify, Palign })
    return { ...refData }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
