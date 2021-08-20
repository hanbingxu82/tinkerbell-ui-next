/*
 * @Author: your name
 * @Date: 2021-08-20 15:45:35
 * @LastEditTime: 2021-08-20 16:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Link/index.js
 */
// 导入组件，组件必须声明 name
import Link from './index.vue'

// 为组件添加 install 方法，用于按需引入
Link.install = function (Vue: any) {
  Vue.component(Link.name, Link)
}

export default Link
