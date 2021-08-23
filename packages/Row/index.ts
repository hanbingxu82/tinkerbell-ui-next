/*
 * @Author: your name
 * @Date: 2021-08-23 09:58:50
 * @LastEditTime: 2021-08-23 11:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Row/index.ts
 */
import Row from './index.vue'

// 为组件添加 install 方法，用于按需引入
Row.install = function (Vue: any) {
  Vue.component(Row.name, Row)
}

export default Row
