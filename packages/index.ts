/*
 * @Author: your name
 * @Date: 2021-08-19 10:20:07
 * @LastEditTime: 2021-08-23 11:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/index.ts
 */
import './assets/iconfont/iconfont.css' //导入icon图标
import './assets/style/global.scss'

// 导入多个组件
import tbButton from './Button/index'
import tbLink from './Link/index'
import tbRow from './Row/index'
import tbCol from './Col/index'

// 用于遍历注册
const components = [tbButton, tbLink, tbRow, tbCol]

// install 方法：因为 Vue.use 的时候找的就是install方法
const install: any = function (Vue: any) {
  if (install.installed) return
  install.installed = true
  // 注册全局组件
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  tbButton,
  tbLink,
}
