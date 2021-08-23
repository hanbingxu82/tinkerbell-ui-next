/*
 * @Author: your name
 * @Date: 2021-08-20 15:45:35
 * @LastEditTime: 2021-08-23 13:54:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbLink/index.js
 */
// 导入组件，组件必须声明 name
import tbLink from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbLink.install = function (Vue: any) {
  Vue.component(tbLink.name, tbLink)
}

export default tbLink
