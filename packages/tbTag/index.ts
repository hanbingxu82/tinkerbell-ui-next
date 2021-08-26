/*
 * @Author: your name
 * @Date: 2021-08-26 14:03:16
 * @LastEditTime: 2021-08-26 15:04:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbTag/index.ts
 */
import tbTag from './index.tsx'

// 为组件添加 install 方法，用于按需引入
tbTag.install = function (Vue: any) {
  Vue.component(tbTag.name, tbTag)
}

export default tbTag
