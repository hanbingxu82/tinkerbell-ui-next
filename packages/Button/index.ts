/*
 * @Author: your name
 * @Date: 2021-08-19 10:19:19
 * @LastEditTime: 2021-08-19 13:52:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Button/index.js
 */
// 导入组件，组件必须声明 name
import Button from './index.vue'

// 为组件添加 install 方法，用于按需引入
Button.install = function (Vue: any) {
  Vue.component(Button.name, Button)
}

export default Button
