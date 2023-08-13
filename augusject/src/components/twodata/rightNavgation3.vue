<template>
  <div class="rightdata">
    <ul>
      <li class="li1">
        <img
          src="https://files.codelife.cc/topsearch/WnBe01o371.png"
          alt
          width="25px"
          height="25px"
        />
        <span>{{ wei }}</span>
      </li>
      <div class="list_data">
        <li v-for="(item, index) in data" :key="index" class="list">
          <span
            :class="{
                one: index==0,
                two: index==1,
                the: index==2
              }"
          >{{ item.index }}</span>
          <span class="title">{{item.title}}</span>
          <span class="hot">{{item.hotValue}}</span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { data } from "../twodata/rightdata3.js";
export default {
  name: "WorkspaceJsonRightNavgation3",

  data() {
    return {
      wei: "微信 ‧ 24h热文榜",
      data: data
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style  scoped>
.list span:first-child {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: gray;
  color: aliceblue;
  text-align: center;
  line-height: 20px;
  border-radius: 3px;
}

.one {
  background-color: red !important;
}
.two {
  background-color: orange !important;
}
.the {
  background-color: rgb(174, 174, 28) !important;
}

.rightdata {
  margin-top: 13.8px;
  float: right;
  width: 100%;
  height: 502px;
}
ul {
  width: 90%;
  height: 100%;
  margin: auto;
}
.li1 {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gray;
}
.li1 img {
  position: relative;
  top: 7px;
  border-radius: 50%;
}
.li1 span {
  position: relative;
  left: 5px;
  color: #fff;
}
.list {
  margin-top: 8px;
}
.title {
  position: relative;
  top: -1px;
  margin-left: 5px;
  font-size: 15px;
  color: gray;
}
.hot {
  margin-top: 3px;
  color: gray;
  font-size: 12px;
  float: right;
}
</style>