<!--
 * @Author: your name
 * @Date: 2021-09-01 13:59:17
 * @LastEditTime: 2021-09-01 14:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBadge/index.vue
-->
<template>
  <div class="tb-badge">
    <slot></slot>
    <transition name="tb-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="tb-badge__content"
        :class="[
          'tb-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
      >
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val: any) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
      },
    },
  },
  setup(props: any, context) {
    const data = reactive({})

    const refData = toRefs(data)
    const content = computed(() => {
      if (props.isDot) return
      const value = props.value
      const max = props.max
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    })
    return { ...refData, content }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
