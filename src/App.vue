<template>
  <div id="box">
    <div id="poa4">
      <div v-show="id == 1" class="apen">
        <span>微信读书</span>
        <fuli></fuli>
      </div>
      <div v-show="id == 2">
        <search></search>
        <under></under>
        <navigation></navigation>
      </div>
      <div v-show="id == 3">
        <search></search>
      </div>
    </div>
    <div class="foot">
      <ul>
        <li
          v-for="(item, index) in fontsss"
          :key="index"
          :style="{ color: activeindex == index ? 'rgb(88, 143, 226)' : '#000' }"
          @click="dianji(index, item.id)"
        >
          <img :src="item.icon" alt width="30px" height="30px" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import search from "./components/Search.vue";
import under from "./components/Under.vue";
import fuli from "./components/foot.vue";
import navigation from "./components/navigation.vue";
export default {
  data() {
    return {
      id: 2,
      color: "rgb(88, 143, 226)",
      activeindex: 1,

      fontsss: [
        {
          id: 1,
          icon: "https://img.icons8.com/?size=2x&id=15895&format=png",
          text: "福利"
        },
        {
          id: 2,
          icon: "https://img.icons8.com/?size=2x&id=1767&format=png",
          text: "书城"
        },
        {
          id: 3,
          icon: "https://img.icons8.com/?size=512&id=NMcUI9NdpWhA&format=png",
          text: "听书"
        }
      ]
    };
  },
  methods: {
    dianji(index, id) {
      this.id = id;
      this.activeindex = index;
    }
  },
  components: {
    search,
    under,
    navigation,
    fuli
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
<style scoped>
#box {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 0;
}
::-webkit-scrollbar {
  display: none;
}
#poa4 {
  width: 100%;
}

.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  z-index: 1 !important;
  background-color: #fff;
}

.foot ul li {
  display: inline-block;
}

.foot ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.foot ul li:nth-child(2) {
  color: aqua;
}
.foot ul li img:nth-child(2) {
  background-color: aqua;
}
.active {
  color: aqua;
}
.apen {
  width: 100%;
  height: 100vh;
}
.apen span {
  position: fixed;
  top: 0%;
  display: block;
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 73.5px;
  background-color: #fff;
  font-weight: 700;
  font-size: 25px;
  z-index: 1;
}
</style>
