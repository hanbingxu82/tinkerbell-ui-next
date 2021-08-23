/*
 * @Author: your name
 * @Date: 2021-08-23 13:59:56
 * @LastEditTime: 2021-08-23 14:07:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbContainer/index.ts
 */
// 导入组件，组件必须声明 name
import tbContainer from './index.vue'

// 为组件添加 install 方法，用于按需引入
tbContainer.install = function (Vue: any) {
  Vue.component(tbContainer.name, tbContainer)
}

export default tbContainer
