/*
 * @Author: your name
 * @Date: 2021-08-26 14:16:46
 * @LastEditTime: 2021-08-26 15:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbTag/index.tsx
 */
import { withModifiers, defineComponent, ref, reactive, toRefs, onBeforeMount } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'tbTag',
  props: {
    // 颜色
    type: {
      type: String,
      default: 'primary',
    },
    // 大小
    size: {
      type: String,
      default: 'small',
    },
    // 三种样式一种是  light也就是默认  发浅色  dark:实心   plain:镂空
    effect: {
      type: String,
      default: 'light',
    },
    // 自定义背景颜色
    color: {
      type: String,
      default: '',
    },
    // 关闭标签
    closable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, context) {
    const data = reactive({
      tbSize: 'tag_small',
      tbType: '',
      tbEffect: '',
      isCloseble: false,
    })

    const refData = toRefs(data)

    // 页面加载判断当前标签是否存在关闭小图标
    const Pclosable = () => {
      if (props.closable) {
        refData.isCloseble.value = true
      } else {
        refData.isCloseble.value = false
      }
    }
    // 页面加载判断当前是何种样式
    const Peffect = () => {
      if (props.effect == 'light') {
        refData.tbEffect.value = 'tag_effect_light'
      } else if (props.effect == 'dark') {
        refData.tbEffect.value = 'tag_effect_dark'
      } else if (props.effect == 'plain') {
        refData.tbEffect.value = 'tag_effect_plain'
      }
    }
    // 页面加载判断当前按钮大小
    const Psize = () => {
      if (props.size == 'mini') {
        refData.tbSize.value = 'tag_mini'
      } else if (props.size == 'small') {
        refData.tbSize.value = 'tag_small'
      } else if (props.size == 'medium') {
        refData.tbSize.value = 'tag_medium'
      }
    }
    // 页面加载判断当前按钮类型
    const Ptype = () => {
      if (props.type == 'primary') {
        refData.tbType.value = 'tag_primary'
      } else if (props.type == 'success') {
        refData.tbType.value = 'tag_success'
      } else if (props.type == 'info') {
        refData.tbType.value = 'tag_info'
      } else if (props.type == 'warning') {
        refData.tbType.value = 'tag_warning'
      } else if (props.type == 'danger') {
        refData.tbType.value = 'tag_danger'
      }
    }
    // 触发父元素事件
    const emitClose = () => {
      context.emit('close')
    }
    onBeforeMount(() => {
      Ptype()
      Psize()
      Peffect()
      Pclosable()
    })

    return () => (
      <div {...data} style={props.color ? `background-color:${props.color}` : ''} class={`tb-tag tag  ${refData.tbType.value} ${refData.tbSize.value} ${refData.tbEffect.value}`}>
        {context.slots.default()} {refData.isCloseble.value ? <i onClick={withModifiers(emitClose, ['stop'])} class="iconfont icon-close-bold bold" style="margin-left:2px;"></i> : ''}
      </div>
    )
  },
})
