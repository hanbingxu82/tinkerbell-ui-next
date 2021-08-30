/*
 * @Author: your name
 * @Date: 2021-08-27 15:38:18
 * @LastEditTime: 2021-08-30 10:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbShowmore/index.ts
 */
import tbShowmore from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbShowmore.install = function (Vue: any) {
  Vue.component(tbShowmore.name, tbShowmore)
}

export default tbShowmore