/*
 * @Author: your name
 * @Date: 2021-08-23 14:38:15
 * @LastEditTime: 2021-08-23 14:41:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbHeader/index.ts
 */
import tbHeader from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbHeader.install = function (Vue: any) {
  Vue.component(tbHeader.name, tbHeader)
}

export default tbHeader
