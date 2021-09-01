/*
 * @Author: your name
 * @Date: 2021-09-01 13:59:12
 * @LastEditTime: 2021-09-01 14:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBadge/index.ts
 */
import tbBadge from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbBadge.install = function (Vue: any) {
  Vue.component(tbBadge.name, tbBadge)
}

export default tbBadge
