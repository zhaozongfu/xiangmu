<template>
  <div class="navigation">
    <ul class="ull">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'active': index === activeTab }"
        @click="activeTab = index"
      >{{ tab.name }}</li>
    </ul>
    <div v-for="(tab, index) in tabs" :key="index" v-show="index === activeTab" id="click">
      <component :is="tab.component"></component>
    </div>
  </div>
</template>
<script>
import WXdata from "../components/Pdata.vue";
import ZXdata from "../components/Fdata.vue";
import Fooder from "../components/fooder.vue";
import Table3 from "../components/WXdata.vue";
import Table4 from "../components/ZXdata.vue";
export default {
  name: "WorkspaceJsonNavigation",
  components: {
    Fooder,
    WXdata,
    ZXdata,
    Table3,
    Table4
  },
  data() {
    return {
      tabs: [
        { name: "文学", component: Fooder },
        { name: "排行", component: ZXdata },
        { name: "分类", component: WXdata },
        { name: "文学艺术", component: Table3 },
        { name: "哲学社科", component: Table4 }
      ],
      activeTab: 0
    };
  }
};
</script>

<style>
.navigation {
  position: sticky;
  top: 110px;
  z-index: 1;
  width: 100%;
  height: 80px;
}

.ull {
  width: 100%;
  height: 55px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: white;
}

.ull li {
  display: inline-block;
  font-size: 18px;
  color: #56585f;
}
.active {
  color: #1b88ee;
}
#click {
  width: 100%;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 80px;
}
::-webkit-scrollbar {
    display: none;
  }
</style>