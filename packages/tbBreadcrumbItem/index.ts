/*
 * @Author: your name
 * @Date: 2021-08-30 14:04:49
 * @LastEditTime: 2021-08-30 14:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBreadcrumbItem/index.ts
 */
import tbBreadcrumbItem from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbBreadcrumbItem.install = function (Vue: any) {
  Vue.component(tbBreadcrumbItem.name, tbBreadcrumbItem)
}

export default tbBreadcrumbItem
