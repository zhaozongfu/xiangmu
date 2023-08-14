<!-- 父组件 ===> 子组件 -->
<template>
  <div class="box">
    <h2>{{text}}</h2>
    <span>讲师名称:{{ name }}</span>
    <br />
    <span>讲师年龄:{{ Age + 1 }}</span>
    <br />
    <span>讲师简历:{{ notes }}</span>
    <br />
    <button @click="updateAge">修改讲师的年龄数据</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonLecturer",

  data() {
    console.log(this);
    return {
      text: "2023年优秀讲师",
      Age: this.age
    };
  },

  mounted() {},

  methods: {
    updateAge() {
      this.Age++;
    }
  },
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true //name是必要的
    },
    age: {
      type: Number,
      default: 99 //默认值
    },
    notes: {}
  }
};
</script>

<style  scoped>
.box {
  width: 100%;
  height: 200px;
  text-align: center;
  background-color: gray;
  border-radius: 15px;
}
button {
  margin: 20px auto 0;
  width: 150px;
  height: 30px;
  text-align: center;
  background-color: antiquewhite;
  color: gray;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}
</style>