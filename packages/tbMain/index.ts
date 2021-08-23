/*
 * @Author: your name
 * @Date: 2021-08-23 14:18:34
 * @LastEditTime: 2021-08-23 14:24:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbMain/index.ts
 */
import tbMain from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbMain.install = function (Vue: any) {
  Vue.component(tbMain.name, tbMain)
}

export default tbMain
