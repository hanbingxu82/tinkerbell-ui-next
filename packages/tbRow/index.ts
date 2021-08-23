/*
 * @Author: your name
 * @Date: 2021-08-23 09:58:50
 * @LastEditTime: 2021-08-23 13:54:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbRow/index.ts
 */
import tbRow from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbRow.install = function (Vue: any) {
  Vue.component(tbRow.name, tbRow)
}

export default tbRow
