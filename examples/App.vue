<!--
 * @Author: your name
 * @Date: 2021-08-19 10:12:38
 * @LastEditTime: 2021-08-19 13:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/examples/App.vue
-->

<template>
  <tb-Button></tb-Button>
  <div>{{ count }}</div>
  <button @click="countMethod" class="xiao">新增</button>
  <img :src="img + '/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F57%2F92%2F01300542193590138063924441627.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616717844&t=e7845b5d13738c4df684d05e2d0001fc'" alt="" />
  <ImgDemo />
</template>

<script lang="ts">
import { defineComponent, ref, reactive, Ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, isProxy } from 'vue'
import ImgDemo from './components/ImgDemo.vue'
export default defineComponent({
  name: 'App',
  components: { ImgDemo },
  setup() {
    interface InPerson {
      name: string
      age: number
      green: boolean
    }
    const img: Ref = ref<string>('https://gimg2.baidu.com')
    const count: Ref = ref<number>(1)
    const obj: InPerson = reactive({ name: '张三', age: 18, green: true })
    console.log(count, obj)
    const countMethod = () => {
      count.value++
    }
    onBeforeMount(() => {
      // 页面渲染完成之前
      console.log('页面渲染之前我执行啦')
    })
    onMounted(() => {
      // 页面加载完成之后执行
      console.log('页面加载之后我执行啦')
    })
    onBeforeUpdate(() => {
      // 数据变更之前执行的钩子函数回调
      console.log('数据变更之前我执行啦')
    })
    onUpdated(() => {
      // 数据变更完成之后执行的钩子函数回调
      console.log('数据变更完成之后我执行啦')
    })
    onBeforeUnmount(() => {
      // 页面移除之前执行的钩子函数回调
      console.log('页面移除之前我执行啦')
    })
    onUnmounted(() => {
      // 页面移除之后执行的生命周期钩子
      console.log('页面移除之后我执行啦')
    })
    console.log(isProxy(ref({})))
    return {
      count,
      img,
      obj,
      countMethod,
    }
  },
})
</script>

<style lang="scss" scoped>
.xiao {
  color: red;
}
</style>
