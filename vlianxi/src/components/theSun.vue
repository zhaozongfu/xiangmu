<template>
  <div>
    <h1>🌞</h1>
    <button @click="send">发送</button>
    <p>{{ ifot }}</p>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonTheSun",

  data() {
    return {
      ifot: ""
    };
  },
  methods: {
    send() {
      console.log("yang");
      this.$bus.$emit("send", "🌠 🌠 🌠 🌠 🌠 🌠 🌠");
    },
    receive(con) {
      this.ifot = con;
    }
  },
  created() {
    this.$bus.$on("reply", this.receive);
  }
};
</script>

<style  scoped>
button{
    width: 80px;
    height: 30px;
    background-color: antiquewhite;
    color: gray;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    
}
p{
   color: cadetblue;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>