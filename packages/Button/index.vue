<!--
 * @Author: your name
 * @Date: 2021-08-19 10:19:03
 * @LastEditTime: 2021-08-20 16:16:32
 * @LastEditors: Please set LastEditors
 * @Description: tb-button组件
 * @FilePath: /tinkerbell-ui-next/packages/Button/index.vue
-->
<template>
  <!-- vue3 将对应的 $listeners  $attrs 统一合并成了 $attrs -->
  <a class="tb-button-box" :style="'display:inline-block;' + (disabled ? 'cursor: not-allowed;' : '')">
    <div v-bind="$attrs" v-if="!tbIcon && type != 'text'" :class="`tb-button button ${tbSize} ${tbType} ${tbPlain} ${tbRound} ${tbDisabled} ${loading ? 'is_disabled' : ' '}`"><i v-if="loading" class="iconfont icon-loading load"></i><slot></slot></div>
    <div v-bind="$attrs" v-else-if="tbIcon && type != 'text'" :class="`tb-button button ${tbIcon} ${tbSize} ${tbType} ${tbPlain} ${tbRound} ${tbDisabled}`"><slot></slot></div>
    <a v-bind="$attrs" v-else-if="type == 'text'" :class="`tb-button ${tbType} ${tbDisabled}`"><slot></slot></a>
  </a>
</template>

<script lang="ts">
import { defineComponent, watch, toRefs, reactive, onBeforeMount, ToRefs } from 'vue'
interface dataProps {
  tbSize: String
  tbType: String
  tbPlain: String
  tbRound: String
  tbIcon: String
  tbDisabled: String
}
export default defineComponent({
  name: 'tbButton',
  props: {
    // 大小
    size: {
      type: String,
      default: 'small',
    },
    // 颜色
    type: {
      type: String,
      default: '',
    },
    // 朴素
    plain: {
      type: Boolean,
      default: false,
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    // 图标按钮
    icon: {
      type: String,
      default: '',
    },
    // 圆形
    circle: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 加载
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const data: dataProps = reactive({
      tbSize: 'button_small',
      tbType: '',
      tbPlain: '',
      tbRound: '',
      tbIcon: '',
      tbDisabled: '',
    })
    // 在template  因为是ref的数据所以并不需要value   但是需要在setup中用.value实现调用响应式
    const refData: ToRefs<dataProps> = toRefs(data)

    // 监听父元素loading事件、主要是为了起到变化的作用
    watch(
      () => props.loading,
      (newValue, old) => {
        console.log(1111, newValue, old)
      }
    )
    // 监听
    watch(
      () => refData.tbDisabled,
      () => {
        PDisabled()
      }
    )

    // 页面加载判断当前按钮大小
    const Psize = () => {
      if (props.size == 'mini') {
        refData.tbSize.value = 'button_mini'
      } else if (props.size == 'small') {
        refData.tbSize.value = 'button_small'
      } else if (props.size == 'medium') {
        refData.tbSize.value = 'button_medium'
      }
    }
    // 页面加载判断当前按钮类型
    const Ptype = () => {
      if (props.type == 'primary') {
        refData.tbType.value = 'button_primary'
      } else if (props.type == 'success') {
        refData.tbType.value = 'button_success'
      } else if (props.type == 'info') {
        refData.tbType.value = 'button_info'
      } else if (props.type == 'warning') {
        refData.tbType.value = 'button_warning'
      } else if (props.type == 'danger') {
        refData.tbType.value = 'button_danger'
      } else if (props.type == 'text') {
        refData.tbType.value = 'button_text'
      }
    }
    // 页面加载判断当前是否是朴素按钮
    const Pplain = () => {
      if (props.plain) {
        refData.tbPlain.value = 'is-plain'
      } else {
        refData.tbPlain.value = ''
      }
    }
    // 页面加载判断是否为圆角按钮
    const Pround = () => {
      if (props.round) {
        refData.tbRound.value = 'is-round'
      } else {
        refData.tbRound.value = ''
      }
    }
    // 页面加载判断是否为图标按钮  和圆形按钮
    const Picon = () => {
      if (props.icon && props.circle) {
        refData.tbIcon.value = 'button_icon iconfont ' + props.icon
      } else if (props.circle) {
        refData.tbIcon.value = 'button_icon '
      } else if (props.icon) {
        refData.tbIcon.value = ' iconfont ' + props.icon
      } else {
        refData.tbIcon.value = ''
      }
    }
    // 判断是否是禁用
    const PDisabled = () => {
      if (props.disabled) {
        refData.tbDisabled.value = ' is_disabled '
      } else {
        refData.tbDisabled.value = ''
      }
    }
    onBeforeMount(() => {
      // 执行这几个方法
      Psize()
      Ptype()
      Pplain()
      Pround()
      Picon()
      PDisabled()
    })

    return { ...refData }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
