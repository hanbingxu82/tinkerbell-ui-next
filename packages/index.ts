/*
 * @Author: your name
 * @Date: 2021-08-19 10:20:07
 * @LastEditTime: 2021-08-19 13:54:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/packages/index.ts
 */
// 导入单个组件
import tbButton from './Button/index'

// 以数组的结构保存组件，便于遍历
const components = [
    tbButton
]

// 定义 install 方法
const install:any = function (Vue:any) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && (window as any).Vue ) {
    install((window as any).Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}