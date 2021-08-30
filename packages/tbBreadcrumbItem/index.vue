<!--
 * @Author: your name
 * @Date: 2021-08-30 14:04:53
 * @LastEditTime: 2021-08-30 15:24:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBreadcrumbItem/index.vue
-->
<template>
  <span class="tb-breadcrumb__item">
    <span :class="['tb-breadcrumb__inner', to ? 'is-link' : '']" ref="linkRef">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="tb-breadcrumb__separator" :class="`iconfont ${separatorClass}`"></i>
    <span v-else class="tb-breadcrumb__separator">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
interface dataProps {}
export default defineComponent({
  name: 'tbBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean,
  },
  setup(props, context) {
    const tbBreadcrumb: any = inject('tbBreadcrumb')
    const data = reactive({
      separator: '',
      separatorClass: '',
    })
    // dom 节点
    const linkRef = ref()
    const refData = toRefs(data)
    onMounted(() => {
      refData.separator.value = tbBreadcrumb.separator
      refData.separatorClass.value = tbBreadcrumb.separatorClass
      // 获取dom节点
      const link = linkRef.value
      const router: any = useRouter()
      link.addEventListener('click', () => {
        if (!props.to || !router) return
        props.replace ? router.replace(props.to) : router.push(props.to)
      })
    })
    return { linkRef, ...refData }
  },
})
</script>

<style lang="sass">
@import './index.scss';
</style>
