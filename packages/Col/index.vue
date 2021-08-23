<!--
 * @Author: your name
 * @Date: 2021-08-23 09:59:23
 * @LastEditTime: 2021-08-23 11:44:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Col/index.vue
-->
<template>
  <div v-bind="$attrs" :class="`tb-col ${tbxs} ${tbsm} ${tbmd} ${tblg} ${tbxl} `" :style="`width:${num * span}%;${gutter ? gutter + ';' : ''} ${tbOffset} ${tbPush} ${tbPull}`"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, inject, onBeforeMount } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'tbCol',
  props: {
    span: {
      type: [Number, String],
      default: 0,
    },
    // 栅格左侧的间隔格数
    offset: {
      type: [Number, String],
      default: 0,
    },
    // 栅格向右移动格数
    push: {
      type: [Number, String],
      default: 0,
    },
    // 栅格向左移动格数
    pull: {
      type: [Number, String],
      default: 0,
    },
    xs: {
      type: [Number, Object],
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return 0
      },
    },
    sm: {
      type: [Number, Object],
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return 0
      },
    },
    md: {
      type: [Number, Object],
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return 0
      },
    },
    lg: {
      type: [Number, Object],
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return 0
      },
    },
    xl: {
      type: [Number, Object],
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return 0
      },
    },
  },
  setup(props: any, context) {
    const tbrow: any = inject('tbrow')
    const data = reactive({
      gutter: '',
      num: 0, // 等份  24/份  100
      tbspan: '',
      tbOffset: '',
      tbPush: '',
      tbPull: '',
      color: 'red',
      tbxs: '',
      tbsm: '',
      tbmd: '',
      tblg: '',
      tbxl: '',
    })

    const refData = toRefs(data)
    const Pxs = (): void => {
      // 如果是数值类型
      if (props.xs > 0 && / Number/.test(Object.prototype.toString.call(props.xs))) {
        refData.tbxs.value = 'tb-col-xs-' + props.xs
      } else if (props.xs && / Object/.test(Object.prototype.toString.call(props.xs))) {
        refData.tbxs.value = 'tb-col-xs-' + props.xs.span + ' tb-col-xs-offset-' + props.xs.span
        // refData.Poff.valueset(props.xs.offset);
      } else {
        refData.tbxs.value = ''
      }
    }
    const Psm = (): void => {
      // 如果是数值类型
      if (props.sm > 0 && / Number/.test(Object.prototype.toString.call(props.sm))) {
        refData.tbsm.value = 'tb-col-sm-' + props.sm
      } else if (props.sm && / Object/.test(Object.prototype.toString.call(props.sm))) {
        refData.tbsm.value = 'tb-col-sm-' + props.sm.span + ' tb-col-sm-offset-' + props.sm.span
        // vm.Poffset(props.sm.offset);
      } else {
        refData.tbsm.value = ''
      }
    }
    const Pmd = (): void => {
      // 如果是数值类型
      if (props.md > 0 && / Number/.test(Object.prototype.toString.call(props.md))) {
        refData.tbmd.value = 'tb-col-md-' + props.md
      } else if (props.md && / Object/.test(Object.prototype.toString.call(props.md))) {
        refData.tbmd.value = 'tb-col-md-' + props.md.span + ' tb-col-md-offset-' + props.md.span
        // vm.Poffset(props.md.offset);
      } else {
        refData.tbmd.value = ''
      }
    }
    const Plg = () => {
      // 如果是数值类型
      if (props.lg > 0 && / Number/.test(Object.prototype.toString.call(props.lg))) {
        refData.tblg.value = 'tb-col-lg-' + props.lg
      } else if (props.lg && / Object/.test(Object.prototype.toString.call(props.lg))) {
        refData.tblg.value = 'tb-col-lg-' + props.lg.span + ' tb-col-lg-offset-' + props.lg.span
        // vm.Poffset(props.lg.offset);
      } else {
        refData.tblg.value = ''
      }
    }
    const Pxl = () => {
      // 如果是数值类型
      if (props.xl > 0 && / Number/.test(Object.prototype.toString.call(props.xl))) {
        refData.tbxl.value = 'tb-col-xl-' + props.xl
      } else if (props.xl && / Object/.test(Object.prototype.toString.call(props.xl))) {
        refData.tbxl.value = 'tb-col-xl-' + props.xl.span + ' tb-col-xl-offset-' + props.xl.span
        // props.Poffset(props.xl.offset);
      } else {
        refData.tbxl.value = ''
      }
    }
    const Poffset = (offset: String | Number | any) => {
      if (props.offset > 0) {
        refData.tbOffset.value = 'margin-left:' + refData.num.value * offset + '%;'
      }
    }
    const Ppush = (push: String | Number | any) => {
      if (props.push > 0) {
        refData.tbPush.value = 'margin-right:' + refData.num.value * push + '%;'
      }
    }
    const Ppull = (pull: String | Number | any) => {
      if (props.pull > 0) {
        refData.tbPull.value = 'margin-left:' + refData.num.value * pull + '%;'
      }
    }
    const Pspan = (span: String | Number | any) => {
      if (props.span > 0) {
        refData.tbspan.value = 'width:' + refData.num.value * span + '%;'
      }
    }

    onBeforeMount(() => {
      refData.num.value = 4.1666
      Pspan(props.span)
      Poffset(props.offset)
      Ppush(props.push)
      Ppull(props.pull)
      Pxs()
      Psm()
      Pmd()
      Plg()
      Pxl()
      // 判断如果tb-row传递了gutter才会有  才会进入这个条件
      if (tbrow.gutter) {
        refData.gutter.value = 'padding:0 ' + tbrow.gutter / 2 + 'px'
      }
    })

    return { ...refData }
  },
})
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>
