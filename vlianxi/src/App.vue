<template>
  <div id="app">
    <moon />
    <hr />
    <theSun />
    <lianXi ref="lx"></lianXi>
    <!-- ref属性 -->
    <lecturer name="孟欣" :age="26" notes="性格热情开朗,待人友好,为人诚实谦虚。工作勤奋,认真负责,能吃苦耐劳,尽职尽责,有耐心。"></lecturer>
  </div>
</template>
<script>
import moon from "./components/Moon.vue";
import theSun from "./components/theSun.vue";
import lianXi from "./components/lianXi";
import lecturer from "./components/lecturer.vue";
export default {
  name: "App",
  components: {
    moon,
    theSun,
    lianXi,
    lecturer
  },
  mounted() {
    const lx = this.$refs.lx.$el; //通过ref找到当前标签或盒子
    console.log(lx);
  }
};
</script>
 
<style>
#app {
  text-align: center;
}
</style>
