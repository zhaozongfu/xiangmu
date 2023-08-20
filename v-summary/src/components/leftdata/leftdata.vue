<template>
  <div class="opennn">
    <div class="leftdata">
      <leftinp></leftinp>
      <div class="leftlist">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            @click="activeTab = index"
            :class="{ 'active': index === activeTab }"
          >
            <span @click="activeTab1 = index" :class="{ 'active1': index === activeTab1 }">
              <img :src="item.image" alt />
              {{ item.date }}
              <p>{{ item.num }}</p>
            </span>
          </li>
        </ul>
      </div>

      <div class="leftlist1">
        <ul>
          <li
            v-for="(item,index) in list1"
            :key="index"
            @click="activeTab2 = index"
            :class="{ 'active': index === activeTab2 }"
            @mouseover="item.hovered= true"
            @mouseout="item.hovered = false"
          >
            <a href="#">
              <span @click="activeTab3 = index" :class="{ 'active1': index === activeTab3 }">
                <svg
                  data-v-a22cce3a
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  class="tuiui"
                >
                  <g fill="none">
                    <path
                      d="M2.75 18h12.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.494L2.75 18h12.5h-12.5zm0-6.5h18.5a.75.75 0 0 1 .102 1.493L21.25 13H2.75a.75.75 0 0 1-.102-1.493l.102-.007h18.5h-18.5zm0-6.497h15.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493l.102-.007h15.5h-15.5z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                {{ item.date }}
                <svg
                  t="1692464430276"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2443"
                  width="16"
                  height="16"
                  v-if="item.hovered"
                  @click.prevent="deletFun(index)"
                >
                  <path
                    d="M928.16 144H736V64a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v80H95.84a32 32 0 0 0 0 64H129.6l77.92 698.656A96 96 0 0 0 302.912 992h418.144a96.032 96.032 0 0 0 95.424-85.344L894.4 208h33.728a32 32 0 0 0 0.032-64zM352 96h320v48H352V96z m400.896 803.552a32 32 0 0 1-31.808 28.448H302.912a32 32 0 0 1-31.808-28.448L193.984 208h636.032l-77.12 691.552z"
                    p-id="2444"
                    fill="#8a8a8a"
                  />
                  <path
                    d="M608 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32zM432 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32z"
                    p-id="2445"
                    fill="#8a8a8a"
                  />
                </svg>
                <p v-else>{{ item.num }}</p>
              </span>
            </a>
          </li>
        </ul>
        <div class="list-add">
          <a href="#">
            <svg
              data-v-a22cce3a
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              class="tuiui"
            >
              <path
                fill="currentColor"
                d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
              />
            </svg>
            <span @click="addItem">新建列表</span>
          </a>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in list" :key="index" v-show="index === activeTab" class="click">
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script>
import leftinp from "../leftdata/leftinp.vue";
import rdata1 from "../rightdata/rightdata.vue";
import rdata2 from "../rightdata/rightdata1.vue";
import rdata3 from "../rightdata/rightdata2.vue";
import rdata4 from "../rightdata/rightdata3.vue";
export default {
  name: "VSummaryLeftdata",

  data() {
    return {
      list1: [
        {
          component: rdata4
        }
      ],
      activeTab2: null,
      activeTab3: null,
      list: [
        {
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAG5JREFUOE9jZKAQMIL0d3d3O/z//z+eVLPKysoSwQZ0dXXNB3GwGYBLrqurKwGkftQAaoYBnih0YGBgOIBFXoGBgWHhaCxQORYO4ogJUCZbiEXOnoGB4SA4Ftrb2xWYmZlB0UU0YGRkfFBaWnoAAFgKgvcfo0+oAAAAAElFTkSuQmCC",
          date: "所有",
          num: 3,
          component: rdata1
        },
        {
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHpJREFUOE9jZKAQMKLr7+rq+l9WVoYhDlKHTQ6usKuraz8DA4MDkQ56UFZWpghSi2zAfyI1g5XBXIliAC6n4/MmhgEgf8I0/P//v7G8vLxhiBlATEAiRyf1A3Fou2A+AwNDAjFeYGBgOFBWVuaIkpSJ1IihDGuuI8UwAMFfdhEui1guAAAAAElFTkSuQmCC",
          date: "今天",
          num: 1,
          component: rdata2
        },
        {
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPxJREFUOE+tU8FtwzAQ09VPL9FukmySDGEa/kRpP4bpIZJOkm5SDWLABQ0rUFW7cJHqJ+qOR93xzC0ckgcA177vd8MwhKZpQsTycBOgwHEcL865AGBPcgRgXded9V7X9TliJBW3M7NjVVUfEwHJm5m9CpjvFwBHVTWzIFyJwtKCAF4iwVRx6TtrWFR0J/hLcoxV0f9T8PAXcoK524dZ7jU2MMr/0YM1BSQ/48jSPm0iaNv2uSiKm8aVN1neSX2wOMbUSDkByROAt1+nIAIZSbZOCbz3T2VZegD+kTFO+3K3snPuPa+0Zq55d6Rgny6T15JsdGT4tkwbkxbDvgDzQboRM93XlwAAAABJRU5ErkJggg==",
          date: "最近7天",
          num: 4,
          component: rdata3
        }
      ],
      activeTab: 0,
      activeTab1: 0
    };
  },
  components: {
    leftinp
  },
  created() {
    // 设置所有列表项的初始状态为关闭图标
    this.list1.forEach(item => {
      item.hovered = false;
    });
    const storedItemList = localStorage.getItem("list1");
    if (storedItemList) {
      this.list1 = JSON.parse(storedItemList);
    }
  },
  mounted() {},

  methods: {
    deletFun(index) {
      console.log(index);
      if (confirm("确认删除吗")) {
        this.list1.splice(index, 1);
        localStorage.setItem("list1", JSON.stringify(this.list1));
      }
    },
    addItem() {
      const newItem = {
        date: "待办事项",
        num: 0,
        hovered: false,
        component: rdata4
      };
      console.log(this.list1);
      this.list1.push(newItem);
      localStorage.setItem("list1", JSON.stringify(this.list1));
    }
  }
};
</script>

<style scoped>
.opennn {
  height: 100%;
}
.leftdata {
  float: left;
  width: 20%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #1c1c1e;
}
.leftlist {
  width: 90%;
  height: 105px;
  margin: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
ul {
  width: 100%;
  height: 100%;
}
ul li span {
  display: block;
  width: 95%;
  height: 20px;
  margin: auto;
  position: relative;
  top: 5px;
  color: rgba(255, 255, 255, 0.3);
}
ul li {
  width: 100%;
  height: 30px;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 14px;
}
ul li:hover {
  background-color: #1b2835;
}
p {
  position: absolute;
  top: 1px;
  right: 5px;
}
img {
  position: relative;
  top: 2px;
}
.active {
  background-color: #1b2835 !important;
  box-shadow: -2px 0px 0px 0px #1089ff;
}

.leftlist1 {
  position: relative;
  top: 4px;
  width: 90%;
  height: 350px;
  margin: auto;
  overflow: hidden;
}
::-webkit-scrollbar {
  display: none;
}
.tuiui {
  position: relative;
  top: 3px;
  width: 16px;
  height: 16px;
}
.list-add {
  width: 100px;
  height: 25px;
  margin: auto;
  position: fixed;
  bottom: 12px;
  color: rgba(255, 255, 255, 0.3);
}
.leftlist1 a {
  color: rgba(255, 255, 255, 0.3);
}
.list-add:hover a {
  color: rgba(255, 255, 255, 0.822);
}
.icon {
  float: right;
  position: relative;
  top: 3px;
}
.click {
  position: relative;
  top: -20px;
  width: 80%;
  height: 100%;
  float: right;
}
</style>