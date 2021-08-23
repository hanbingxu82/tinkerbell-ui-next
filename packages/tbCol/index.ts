/*
 * @Author: your name
 * @Date: 2021-08-23 09:59:18
 * @LastEditTime: 2021-08-23 13:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbCol/index.ts
 */
import tbCol from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbCol.install = function (Vue: any) {
  Vue.component(tbCol.name, tbCol)
}

export default tbCol
