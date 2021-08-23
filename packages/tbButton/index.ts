/*
 * @Author: your name
 * @Date: 2021-08-19 10:19:19
 * @LastEditTime: 2021-08-23 13:53:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbButton/index.js
 */
// 导入组件，组件必须声明 name
import tbButton from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbButton.install = function (Vue: any) {
  Vue.component(tbButton.name, tbButton)
}

export default tbButton
