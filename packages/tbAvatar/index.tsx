/*
 * @Author: your name
 * @Date: 2021-09-16 16:27:40
 * @LastEditTime: 2021-09-16 17:23:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbAvatar/index.tsx
 */
import { withModifiers, defineComponent, ref, reactive, toRefs, onBeforeMount, computed } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'tbAvatar',
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      },
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val: any) {
        return ['circle', 'square'].includes(val)
      },
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    abc: Function,
    fit: {
      type: String,
      default: 'cover',
    },
  },
  setup(props: any, context) {
    const data = reactive({
      isImageExist: true,
    })

    const refData = toRefs(data)
    const avatarClass = computed(() => {
      const { size, icon, shape } = props
      let classList = ['tb-avatar']
      if (size && typeof size === 'string') {
        classList.push(`tb-avatar--${size}`)
      }
      if (icon) {
        classList.push('tb-avatar--icon')
      }
      if (shape) {
        classList.push(`tb-avatar--${shape}`)
      }
      return classList.join(' ')
    })

    // 错误回调  因为传递进来的是error函数
    const handleError = function (): void {
      const { error } = props
      const errorFlag = error ? error() : undefined
      if (errorFlag !== false) {
        refData.isImageExist.value = false
      }
    }
    const renderAvatar = function (h) {
      // 拆出取对应props中的数值
      const { icon, src, alt, srcSet, fit } = props
      if (refData.isImageExist.value && src) {
        // onError事件对标传递进来的错误回调   srcSet 动态相当于响应式对应图像 使用,分割  object-fit 按照位置剪切
        return <img src={src} onError={handleError} alt={alt} srcset={srcSet} style={`object-fit:${fit};`} />
      }
      if (icon) {
        // 如果是图标
        return <i class={`iconfont ${icon}`} />
      }
      // 如果是文本
      return context.slots.default ? context.slots.default() : ''
    }
    onBeforeMount(() => {
      if (props.abc) {
        props.abc()
      }
    })

    return (h) => {
      console.log(avatarClass.value)
      const { size } = props
      const sizeStyle =
        typeof size === 'number'
          ? {
              height: `${size}px`,
              width: `${size}px`,
              lineHeight: `${size}px`,
            }
          : {}
      return (
        <span class={avatarClass.value} style={sizeStyle}>
          {renderAvatar(h)}
        </span>
      )
    }
  },
})
