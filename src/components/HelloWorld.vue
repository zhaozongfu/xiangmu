<template>
  <div id="box">
    <search></search><!-- 顶部 -->
    <under></under><!-- 记录部分 -->
    <navigation></navigation><!-- 上面导航 -->
    <!-- <fooder></fooder>内容主题 -->
   <!--  <fdata></fdata> -->
    <!-- <pdata></pdata> -->
    <!-- <foot></foot> -->
    <!-- 底部导航 -->
  </div>
</template>
<script>
import search from '../components/Search.vue'
import under from '../components/Under.vue'
// import fooder from '../components/fooder.vue'//推荐
// import pdata from '../components/Pdata.vue'//分类
// import fdata from '../components/Fdata.vue'//分类
// import foot from '../components/foot.vue'
import navigation from '../components/navigation.vue'

  // import ChaoTabtwo from ''
export default {
  components: {
    search,
    under,
    // fooder,//推荐
    // fdata,//分类
    // pdata,//排行
    // foot,
    navigation,

  },

}
</script>
<style scoped>
  #box{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 0;
  }
</style>





