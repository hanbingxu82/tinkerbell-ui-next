/*
 * @Author: your name
 * @Date: 2021-08-19 10:12:38
 * @LastEditTime: 2021-08-19 10:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      'plugins': ['dynamic-import-node']
    }
  }
};
