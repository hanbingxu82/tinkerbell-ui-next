/*
 * @Author: your name
 * @Date: 2021-08-23 14:17:41
 * @LastEditTime: 2021-08-23 14:24:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbFooter/index.js
 */
import tbFooter from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbFooter.install = function (Vue: any) {
  Vue.component(tbFooter.name, tbFooter)
}

export default tbFooter
