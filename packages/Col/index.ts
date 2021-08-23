/*
 * @Author: your name
 * @Date: 2021-08-23 09:59:18
 * @LastEditTime: 2021-08-23 11:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Col/index.ts
 */
import Col from './index.vue'

// 为组件添加 install 方法，用于按需引入
Col.install = function (Vue: any) {
  Vue.component(Col.name, Col)
}

export default Col
