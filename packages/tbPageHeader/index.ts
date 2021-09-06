/*
 * @Author: your name
 * @Date: 2021-09-03 09:15:46
 * @LastEditTime: 2021-09-03 09:21:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbPageHeader/index.ts
 */
import tbPageHeader from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbPageHeader.install = function (Vue: any) {
  Vue.component(tbPageHeader.name, tbPageHeader)
}

export default tbPageHeader