/*
 * @Author: your name
 * @Date: 2021-08-23 14:12:52
 * @LastEditTime: 2021-08-23 14:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbAside/index.ts
 */
// 导入组件，组件必须声明 name
import tbAside from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbAside.install = function (Vue: any) {
  Vue.component(tbAside.name, tbAside)
}

export default tbAside
