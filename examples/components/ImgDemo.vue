<!--
 * @Author: your name
 * @Date: 2021-08-19 10:22:54
 * @LastEditTime: 2021-08-19 10:23:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tinkerbell-ui-next/examples/components/ImgDemo.vue
-->

<template>
  <div class="body1" :style="'background-image:' + 'url(' + require('../assets/logo.png') + ')'"></div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  // 写不写ImgDemo都可以
  name: "ImgDemo",
  setup() {
    const url: Ref = ref<string>(process.env.BASE_URL);
    url.value += "images/go.jpg";
    const relative: Ref = ref<string>("../assets/logo.png");
    const absolute: Ref = ref<string>("/images/go.jpg");
    return { url, relative, absolute };
  },
});
</script>
<style>
.body1 {
  width: 100vw;
  height: 100vh;
  background-image: url("/images/go.jpg");
}
</style>
