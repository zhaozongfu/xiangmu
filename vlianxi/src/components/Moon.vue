<template>
  <div>
    <h1>🌜</h1>
    <h3>{{info}}</h3>
    <input type="text" v-model="replyin" @keyup.enter="reply" name id />
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonMoon",

  data() {
    return {
      info: "你干嘛❓",
      replyin: ""
    };
  },
  methods: {
    receive(msg) {
      this.info = msg;
    },
    reply() {
      this.$bus.$emit("reply", this.replyin);
      this.replyin = "";
    }
  },
  created() {
    this.$bus.$on("send", this.receive);
  }
};
</script>

<style  scoped>
input {
  width: 200px;
  height: 25px;
  background-color: gray;
  border: none;
  border-radius: 5px;
}
</style>
