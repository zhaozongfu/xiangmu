<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <headers></headers>
      <Unders></Unders>
  </div>
</template>

<script>
import headers from './components/HelloWorld.vue'
import Unders from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    headers,
    Unders
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
