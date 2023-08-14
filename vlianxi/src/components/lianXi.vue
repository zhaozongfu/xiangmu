<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonLianXi",

  data() {
    return {
      text: "每个人的心里，都有一个忘不记，却无法拥抱珍惜的人。"
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
  div{
    width: 100%;
    text-align: center;
  }
  p{
    font-size: 20px;
    color: darkorange;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
</style>