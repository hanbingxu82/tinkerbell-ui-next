/*
 * @Author: your name
 * @Date: 2021-08-19 12:57:08
 * @LastEditTime: 2021-08-19 12:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/Tinkerbell/index.ts
 */
// 导入组件，组件必须声明 name
import Tinkerbell from "./index.vue";

// 为组件添加 install 方法，用于按需引入
Tinkerbell.install = function (Vue) {
  Vue.component(Tinkerbell.name, Tinkerbell);
};

export default Tinkerbell;
