<template>
  <div>
    <div class="todo-icon" @click="zhuti">
      <img :src="imger" alt width="100%" height="100%" />
      <span>待办事项</span>
    </div>
    <transition name="fade">
      <div :class="{ 'largepage': isLarge, 'app': !isLarge }" v-if="apptext">
        <div id="icon" title="放大/缩小" @click="togglePageSize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="8"
            height="8"
            viewBox="0 0 11 11"
            fill="none"
            class="d-middle"
            v-if="iconxxx"
          >
            <path
              id="形状"
              fill-rule="evenodd"
              opacity="1"
              d="M2.3,4.5v4.2h4.2c0.55,0 1,0.45 1,1v0.3c0,0.55 -0.45,1 -1,1h-5c-0.83,0 -1.5,-0.67 -1.5,-1.5v-5c0,-0.55 0.45,-1 1,-1h0.3c0.55,0 1,0.45 1,1zM9.5,0c0.83,0 1.5,0.67 1.5,1.5v5c0,0.55 -0.45,1 -1,1h-0.3c-0.55,0 -1,-0.45 -1,-1v-4.2h-4.2c-0.55,0 -1,-0.45 -1,-1v-0.3c0,-0.55 0.45,-1 1,-1z"
              style="fill: rgb(255, 255, 255);"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="12"
            height="2.399993896484375"
            viewBox="0 0 12 2.399993896484375"
            fill="none"
            class="d-middle"
            id="min-icon"
            v-if="iconx"
          >
            <path
              id="矩形"
              fill-rule="evenodd"
              opacity="1"
              d="M1 2.4L11 2.4C11.55 2.4 12 1.95 12 1.4L12 1C12 0.45 11.55 0 11 0L1 0C0.45 0 0 0.45 0 1L0 1.4C0 1.95 0.45 2.4 1 2.4Z"
              style="fill: rgb(255, 255, 255);"
            />
          </svg>
        </div>
        <div id="icon1" title="关闭" @click="guanbi">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="8"
            height="8"
            viewBox="0 0 11 11"
            fill="none"
            class="d-middle"
          >
            <path
              id="形状结合"
              fill-rule="evenodd"
              opacity="1"
              d="M8.55 10.58L5.5 7.53L2.45 10.58C1.89 11.14 0.98 11.14 0.42 10.58C-0.14 10.02 -0.14 9.11 0.42 8.55L3.47 5.5L0.42 2.45C-0.14 1.89 -0.14 0.98 0.42 0.42C0.98 -0.14 1.89 -0.14 2.45 0.42L5.5 3.47L8.55 0.42C9.11 -0.14 10.02 -0.14 10.58 0.42C11.14 0.98 11.14 1.89 10.58 2.45L7.53 5.5L10.58 8.55C11.14 9.11 11.14 10.02 10.58 10.58C10.02 11.14 9.11 11.14 8.55 10.58Z"
              style="fill: rgb(255, 255, 255);"
            />
          </svg>
        </div>
        <lefter></lefter>
      </div>
    </transition>
  </div>
</template>

<script>
import lefter from "./components/leftdata/leftdata.vue";

export default {
  name: "App",
  data() {
    return {
      imger: "https://files.codelife.cc/icons/todo.svg",
      isComponentVisible: false,
      isLarge: false, // 默认为小尺寸
      iconxxx: true,
      iconx: false,
      apptext: false
    };
  },
  components: {
    lefter,
   
  },
  methods: {
    zhuti() {
      this.apptext = true;
      localStorage.setItem('user','张三')
    },
    togglePageSize() {
      this.isLarge = !this.isLarge; // 切换页面大小
      this.iconxxx = !this.iconxxx;
      this.iconx = !this.iconx;
    },
    guanbi() {
      this.apptext = false;
      localStorage.setItem('user','李四')
    }
  }
};
</script>
<style scoped>
.todo-icon {
  text-align: center;
  width: 48px;
  height: 48px;
  background-color: #2066cc;
  border-radius: 12.8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.todo-icon span {
  font-size: 12px;
}
.app {
  width: 80%;
  height: 600px;
  background-color: #16161a;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: all 0.2s ease;
}
fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.kei {
  width: 80px;
  height: 30px;
  text-align: center;
  margin: auto;
}
#icoon {
  width: 80px;
  height: 30px;
}
#icon {
  float: right;
  position: relative;
  top: 7px;
  left: -30px;
  right: 10px;
  width: 20px;
  height: 20px;
  line-height: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: center;
  z-index: 1;
}
#icon1 {
  float: right;
  position: relative;
  top: 7px;
  left: 15px;
  right: 10px;
  width: 20px;
  height: 20px;
  line-height: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: center;
  z-index: 1;
}
#min-icon {
  position: relative;
  top: -2px;
}
#icon:hover {
  content: attr(title);
  background-color: #939393;
}
#icon1:hover {
  content: attr(title);
  background-color: red;
}
.largepage {
  width: 100%;
  height: 100%;
  background-color: #16161a;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0px;
  transition: all 0.2s ease;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html {
  height: 100%;
  background: url("https://w.wallhaven.cc/full/e7/wallhaven-e7jj6r.jpg")
    no-repeat 0 0/100% 100%;
}
</style>
