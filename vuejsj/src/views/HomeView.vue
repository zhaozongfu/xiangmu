<template>
  <div>
    <router-link :to="{name:'fanju'}" style="font-family: 'Times New Roman', serif; color:orange">番剧</router-link>&emsp;&emsp;&emsp;&emsp;&emsp;
    <router-link :to="{name:'guoman'}" style="font-family: 'Times New Roman', serif; color:blue">国漫</router-link>
    <div class="homer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {}
};
</script>
<style scoped>
@font-face {
  font-family: "MyCustomFont";
  src: url("../../../../../espect_retro/EspectRetro_PERSONAL_USE_ONLY.otf")
    /*这里是找到你下载资源包内部的自定义文件(通常是 .ttf、.otf 或 .woff 格式)引入*/
    format("truetype");
  /*这里是自定义的文件格式*/
}
/*以上便是一个自定义字体*/
li/*任意标签*/ {
  font-family: "MyCustomFont", serif; /*serif是一种常见的字体分类 */
}
/*通过font-family使用自定义字体*/
.homer {
  width: 300px;
  height: 300px;

  border: 1px dashed black;
  margin: auto;
  margin-top: 20px;
}
</style>
