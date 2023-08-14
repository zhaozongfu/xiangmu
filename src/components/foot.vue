<template>
  <div class="YDdata">
    <div class="textcont" v-for="(item, index) in ydlist" :key="index">
      <img :src="item.imgest" alt width="100%" height="100px" />
      <span>{{ item.name }}</span>
      <p>{{ item.text }}</p>
      <button>{{item.but}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonFoot",

  data() {
    return {
      ydlist: [
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/d6/d63eqg.jpg?w=400&h=200&fmt=webp",
          name: "每日一答",
          text: "挑战连续答对12道题",
          but: "玩一玩"
        },
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/6d/6d5r5x.jpg?w=400&h=200&fmt=webp",
          name: "读书小队",
          text: "3人成对.共攒积分兑大奖",
          but: "立即组队"
        },
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/85/85kpek.jpg?w=400&h=200&fmt=webp",
          name: "每日一答",
          text: "挑战连续答对12道题",
          but: "玩一玩"
        },
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/6d/6d22qq.jpg?w=400&h=200&fmt=webp",
          name: "每日一答",
          text: "挑战连续答对12道题",
          but: "玩一玩"
        },
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/x6/x67oxo.jpg?w=400&h=200&fmt=webp",
          name: "每日一答",
          text: "挑战连续答对12道题",
          but: "玩一玩"
        },
        {
          imgest: "https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/l8/l8weeq.jpg?w=400&h=200&fmt=webp",
          name: "每日一答",
          text: "挑战连续答对12道题",
          but: "玩一玩"
        },
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.YDdata {
  width: 100%;
  overflow: auto;
  margin-top: 80px;
}
.textcont {
  width: 90%;
  margin: auto;
  height: 160px;
  background-color: #fff;
  margin-top:25px ;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.textcont img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.textcont span {
  position: relative;
  left: 20px;
  top: 3px;
  font-size: 18px;
}
.textcont p {
  position: relative;
  top: 3px;
  left: 20px;
  width: 65%;
  font-size: 13px;
  color: gray;
}
.textcont button {
  width: 18%;
  height: 28px;
  border-radius: 15px;
  border: none;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  float: right;
  position: relative;
  top: -30px;
  left: -20px;
}
</style>