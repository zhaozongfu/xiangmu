<template>
  <div>
    <ul>
      <li>灵笼</li>
      <li>斗罗大陆</li>
      <li>一人之下</li>
      <li>中国惊奇先生</li>
      <li>从前有座灵剑山</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonGuoMan",

  data() {
    return {};
  },

  mounted() {},

  methods: {}
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
  margin-top: 10px;
}
</style>