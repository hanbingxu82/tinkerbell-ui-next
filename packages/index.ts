/*
 * @Author: your name
 * @Date: 2021-08-19 10:20:07
 * @LastEditTime: 2021-08-23 14:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/index.ts
 */
import './assets/iconfont/iconfont.css' //导入icon图标
import './assets/style/global.scss'

// 导入多个组件
import tbButton from './tbButton/index'
import tbLink from './tbLink/index'
import tbRow from './tbRow/index'
import tbCol from './tbCol/index'
import tbContainer from './tbContainer/index'
import tbHeader from './tbHeader/index'
import tbAside from './tbAside/index'
import tbMain from './tbMain/index'
import tbFooter from './tbFooter/index'

// 用于遍历注册
const components = [tbButton, tbLink, tbRow, tbCol, tbContainer, tbHeader, tbAside, tbMain, tbFooter]

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
