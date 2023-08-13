<template>
  <div class="divvv">
    <div class="leftdata">
      <ul>
        <li>
          <input type="text" placeholder="搜索" />
        </li>
        <li
          v-for="(item, index) in str"
          :key="index"
          @click="activeTab = index"
          :class="{ 'active': index === activeTab }"
        >
          <a href="#">
            <img :src="item.imgse" alt width="20px" height="20px" />
            <span>{{ item.name }}</span>
            <svg
              data-v-d7b5176e
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 576 512"
              class="xing"
            >
              <path
                d="M528.1 171.5L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3l23.7-138.4l-100.6-98l139-20.2l62.2-126l62.2 126l139 20.2l-100.6 98z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div v-for="(item, index) in str" :key="index" v-show="index === activeTab" class="click">
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script>
import rightdata7 from "../fivedata/rightNavgation6.vue";
import rightdata8 from "../fivedata/rightNavgation7.vue";
import rightdata9 from "../fivedata/rightNavgation8.vue";
export default {
  name: "WorkspaceJsonFiveNavigation",

  data() {
    return {
      str: [
        {
          imgse: "https://files.codelife.cc/topsearch/74KvxwokxM.png",
          name: "哔哩哔哩",
          component: rightdata7
        },
        {
          imgse: "https://files.codelife.cc/topsearch/DpQvNABoNE.png",
          name: "抖音",
          component: rightdata8
        },
        {
          imgse: "https://files.codelife.cc/topsearch/xyzrank.png",
          name: "中文博客榜",
          component: rightdata9
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
.divvv {
  width: 100%;
  height: 527px;
}
.leftdata {
  float: left;
  margin-top: 10px;
  width: 24%;
  height: 512px;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
}
ul {
  width: 100%;
  height: 100%;
}
li {
  width: 100%;
  height: 30px;
  line-height: 25px;
}
li input {
  position: relative;
  left: 7px;
  width: 90%;
  height: 25px;
  border: none;

  border-radius: 10px;
  padding-left: 10px;
  background-color: #2a2a2c;
}
li a {
  position: relative;
  left: 10px;
  display: block;
  width: 80%;
  height: 30px;
}
li img {
  position: relative;
  top: 5px;
  border-radius: 5px;
}
li span {
  position: relative;
  left: 5px;
  font-size: 15px !important;
  color: #fff;
}
li b {
  position: relative;
  top: -3px;
  left: -4px;
  float: right;
  color: #fff;
}
li b:hover {
  content: attr(title);
}
#listers {
  position: relative;
  top: 5px;
  width: 20px;
  height: 20px;
  color: #fff;
}
li span:hover {
  color: #1089ff;
}
.click {
  margin-top: 10.2px;
  float: right;
  width: 75.87%;
  height: 512px;
  border-top: 1px solid gray;
}
.active {
  background-color: #1089ff !important;
}
.xing {
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 5px;
  color: #fff;
}
li a .xing:hover {
  color: #1089ff;
}
</style>