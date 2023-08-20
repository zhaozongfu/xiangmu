<template>
  <div class="rightdata">
    <div class="on-text">
      <span>{{ text }}</span>
      <p>赶快添加您的第一条待办吧</p>
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
export default {
  name: "VSummaryRightdata3",

  data() {
    return {
      text: "待办事项",
      inputValue: "",
      progressValue: 0,
      timer: null,
      barHeight: 1
    };
  },

  mounted() {},

  methods: {
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
input {
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
</style>