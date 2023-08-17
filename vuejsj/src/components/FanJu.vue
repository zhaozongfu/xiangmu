<template>
  <div>
    <ul>
      <li v-for="item in fanjulist" :key="item.id">
        <router-link :to="{name:fjdata}">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonFanju",

  data() {
    return {
      fanjulist: [
        {
          id: 1,
          name: "声之形",
          Malelead: "石田将也",
          queen: "西宫硝子",
          Genre: "校园、社会、治愈类"
        },
        {
          id: 2,
          name: "刀剑神域",
          Malelead: "桐人",
          queen: "亚丝娜",
          Genre: "科幻冒险美剧"
        },
        {
          id: 3,
          name: "学战都市",
          Malelead: "天雾凌斗",
          queen: "席尔薇雅·琉奈海姆",
          Genre: "科幻,喜剧,后宫,校园"
        },
        {
          id: 4,
          name: "夏目友人帐",
          Malelead: "夏目贵志",
          queen: "无",
          Genre: "传奇、学园、少女漫画"
        },
        {
          id: 5,
          name: "从零开始的异世界生活",
          Malelead: "菜月昂",
          queen: "爱蜜莉雅",
          Genre: "后官,奇幻,是世界,穿越"
        },
        {
          id: 6,
          name: "DARLING in the FRANXX/国家队",
          Malelead: "广",
          queen: "02",
          Genre: "科幻类型"
        }
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style  scoped>
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