<template>
  <div id="app">
    <moon />
    <hr />
    <theSun />
  </div>
</template>

<script>
import moon from "./components/Moon.vue";
import theSun from "./components/theSun.vue";
export default {
  name: "App",
  components: {
    moon,
    theSun
  }
};
</script>
 
<style>
#app{
  text-align: center;
}
</style>
