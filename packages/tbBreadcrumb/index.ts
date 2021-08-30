/*
 * @Author: your name
 * @Date: 2021-08-30 14:04:23
 * @LastEditTime: 2021-08-30 14:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbBreadcrumb/index.ts
 */
import tbBreadcrumb from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbBreadcrumb.install = function (Vue: any) {
  Vue.component(tbBreadcrumb.name, tbBreadcrumb)
}

export default tbBreadcrumb
