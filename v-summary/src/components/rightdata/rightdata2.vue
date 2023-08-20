<template>
  <div class="rightdata">
    <div class="on-text">
      <span>{{ text }}</span>
      <p v-if="Lists.length === 0">赶快添加您的第一条待办吧</p>
      <div class="ui">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>隐藏已完成</el-dropdown-item>
            <el-dropdown-item>清理已完成</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="on-html">
        <ul v-if="Lists.length > 0">
          <li v-for="(item, index) in Lists" :key="item">
            <input id="inpout" type="checkbox" v-model="isChecked" />
            <span>{{ item.name}}</span>
            <input id="inpout1" type="date" />
            <b>...</b>
            <svg
              t="1692464430276"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2443"
              width="16"
              height="16"
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
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <svg data-v-a22cce3a xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
        />
      </svg>
      <input
        type="text"
        placeholder="添加任务"
        v-model="inputValue"
        @focus="startAnimation"
        @blur="resetProgress"
        @keyup.enter="addItem"
      />
      <div class="jindu">
        <el-progress
          :percentage="progressValue"
          color="#1089ff"
          :show-text="false"
          :stroke-width="barHeight"
        ></el-progress>
      </div>
    </div>
  </div>
</template>
    

<script>
import audioFile from "../../video/complete.mp3";
export default {
  name: "VSummaryRightdata2",

  data() {
    return {
      text: "最近7天",
      inputValue: "",
      progressValue: 0,
      timer: null,
      barHeight: 1,
      Lists: [],
      isChecked: false,
      audio: null,
      value1: ""
    };
  },
  created() {
    const storedItemList = localStorage.getItem("Lists");
    if (storedItemList) {
      this.Lists = JSON.parse(storedItemList);
    }
  },
  watch: {
    isChecked(newValue) {
      if (newValue) {
        this.audio = new Audio(audioFile);
        this.audio.play();
      } else {
        if (this.audio) {
          this.audio.pause();
          this.audio.currentTime = 0;
        }
      }
    }
  },
  mounted() {},

  methods: {
    addItem() {
      let ljj = {
        name: this.inputValue
      };
      if (this.inputValue.trim() !== "") {
         this.Lists.push(ljj);
      console.log(this.Lists);
      this.inputValue = "";
      localStorage.setItem("Lists", JSON.stringify(this.Lists));
      }
     
    },
    deletFun(index) {
      console.log(index);
      if (confirm("确认删除吗")) {
        this.Lists.splice(index, 1);
        localStorage.setItem("Lists", JSON.stringify(this.Lists));
      }
    },
    startAnimation() {
      clearInterval(this.timer); // 清除之前的计时器
      this.progressValue = 0; // 将进度条重置为0
      this.timer = setInterval(() => {
        if (this.progressValue < 100) {
          this.progressValue += 10; // 每次增加10%
        } else {
          clearInterval(this.timer); // 达到100%后清除计时器
        }
      }, 10);
    },
    resetProgress() {
      clearInterval(this.timer); // 清除计时器
      this.progressValue = 0; // 将进度条重置为0
    }
  }
};
</script>

<style scoped>
.rightdata {
  width: 100%;
  height: 100%;
  float: right;
}
.on-text {
  width: 100%;
  height: 90%;
}
.on-text span {
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 20px;
  color: #dfdddd;
}
.on-text p {
  width: 150px;
  position: relative;
  top: 20px;
  left: 40px;
  color: #dfdddd;
  font-size: 10px;
}
.footer {
  position: fixed;
  bottom: 12px;
  right: 30px;
  width: 74%;
  height: 40px;
  line-height: 40px;
  background-color: #1c1c1e;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: auto;
}
svg {
  width: 16px;
  height: 16px;
  margin-left: 15px;
  color: aliceblue;
}
.footer input {
  position: relative;
  top: -2.5px;
  width: 73%;
  height: 35px;
  outline: none;
  border: none;
  padding-left: 5px;
  background-color: #1c1c1e;
  color: aliceblue;
  border-radius: 6px;
}
.progress-bar {
  height: 10px;
  background-color: #ccc;
}
.ui {
  width: 30px;
  float: right;
  position: relative;
  top: -50px;
  right: 60px;
}
.el-icon--right::before {
  content: "...";
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #999;
}
.el-icon--right:hover {
  background-color: #dfdddd;
}
.on-html {
  margin: auto;
  margin-top: 40px;
  width: 90%;
  height: 85%;
  overflow: hidden;
}
.on-html ul {
  width: 100%;
  height: 100%;
}
.on-html ul li {
  margin-top: 10px;
  width: 100%;
  height: 58px;
  background-color: #1c1c1e;
  border-radius: 6px;
}
.on-html #inpout {
  margin-top: 8px;
  margin-left: 8px;
  width: 16px;
  height: 16px;
}
.on-html span {
  position: relative;
  top: -3px;
  left: 9px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}
#inpout1 {
  position: relative;

  top: 25px;
  width: 16px;
  background-color: #1c1c1e;
  color: rgba(255, 255, 255, 0.3);
  border: none;
}
.icon {
  width: 16px;
  height: 14px;
  float: right;
  position: relative;
  top: 10px;
  right: 0px;
}
b {
  float: right;
  position: relative;
  top: 1px;
  right: 40px;
  color: #999;
}
</style>