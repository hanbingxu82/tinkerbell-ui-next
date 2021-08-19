/*
 * @Author: your name
 * @Date: 2021-08-19 10:17:08
 * @LastEditTime: 2021-08-19 13:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/vue.config.js
 */
module.exports = {
    // 将 examples 目录添加为新的页面
    pages: {
      index: {
        // page 的入口
        entry: 'examples/main.ts',
        // 模板来源
        template: 'public/index.html',
        // 输出文件名
        filename: 'index.html'
      }
    }
  }
  