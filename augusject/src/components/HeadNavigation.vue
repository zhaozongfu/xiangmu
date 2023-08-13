<template>
  <div class="ztext">
    <div class="head">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="activeTab = index"
          :class="{ 'active': index === activeTab }"
        >
          <a href="#">{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div v-for="(item, index) in list" :key="index" v-show="index === activeTab" class="click111">
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script>
import mydata from "./onedata/oneNavigation.vue";
import quandata from "./twodata/twoNagation.vue";
import ZHdata from "./threedata/threeNavigation.vue";
import KJdata from "./fourdata/fourNavigation.vue";
import YLdata from "./fivedata/fiveNavigation.vue";
export default {
  name: "WorkspaceJsonHeadNavigation",
  components: {},
  data() {
    return {
      list: [
        {
          text: "我的订阅",
          component: mydata
        },
        {
          text: "全部",
          component: quandata
        },
        {
          text: "综合",
          component: ZHdata
        },
        {
          text: "科技",
          component: KJdata
        },
        {
          text: "娱乐",
          component: YLdata
        }
      ],
      activeTab: 0
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.ztext {
  width: 100%;
  height: 570px;
}
.head {
  position: relative;
  top: -10px;
  width: 95%;
  height: 40px;
  margin: auto;
}
ul {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid gray;
}
li {
  height: 100%;
}
li a {
  font-size: 14px;
  color: #dfeaf3;
}
.click111 {
  width: 100%;
  height: 528px;
  margin: auto;
}
.active {
  border-bottom: 2px solid #1890ff;
}
.active a {
  color: #1890ff !important;
}
</style>