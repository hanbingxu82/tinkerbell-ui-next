/*
 * @Author: your name
 * @Date: 2021-09-16 15:25:41
 * @LastEditTime: 2021-09-16 16:55:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/tbAvatar/index.ts
 */
import tbAvatar from './index.tsx'

// 为组件添加 install 方法，用于按需引入
tbAvatar.install = function (Vue: any) {
  Vue.component(tbAvatar.name, tbAvatar)
}

export default tbAvatar
