<template>
  <div class="Under">
    <div class="min-hoor">
      <img src="https://img0.baidu.com/it/u=394265363,1766250562&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380" alt=""
        width="30px" height="30px">
      <span>风吹半夏</span>
      <p>体验卡今日道期</p>
    </div>
    <div class="max-boor">
      <img src="https://img2.baidu.com/it/u=3246181534,3185519499&fm=253&fmt=auto&app=138&f=JPEG?w=525&h=350" alt=""
        width="100%" height="100%">
    </div>
    <span class="span1">书架</span>
    <svg t="1691147515195" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="3251" width="16" height="16">
      <path
        d="M757.792745 435.407215L419.597482 96.904967c-40.010393-40.010393-104.886579-40.010393-144.896972 0-40.010393 40.010393-40.010393 104.988908 0 144.9993L540.344959 507.855701 274.70051 773.807135c-40.010393 40.112721-40.010393 104.988908 0 144.9993 40.010393 40.010393 104.886579 40.010393 144.896972 0l338.092935-338.39992c40.112721-40.010393 40.112721-104.988908 0.102328-144.9993z"
        fill="#8a8a8a" p-id="3252"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonUrect',
};
</script>

<style scoped>
.Under {
 
  position: relative;
  width: 88%;
  height:160px;
  background-color: #56585f;
  margin: auto;
  border-radius: 0.4rem;
  margin-top: 130px;
}

.min-hoor {
  position: relative;
  top: 10px;
  left: 8px;
  width:200px;
  height: 35px;
  line-height: 35px;
}

.min-hoor img {
  border-radius: 50%;
}

.min-hoor span {
  position: relative;
  top: -10px;
  left: 4px;
  font-size: 15px;
  color: #fff;
}

.min-hoor p {
  position: relative;
  top: -11px;
  left: 8px;
  display: inline-block;
  font-size: 13px;
  color: gray;
}

.max-boor {
  position: relative;
  top: 15px;
  left:12px;
  width: 80px;
  height:95px;
}

.span1 {
  float: right;
  width: 15px;
  height: 40px;
  display: block;
  font-size: 15px;
  position: relative;
  top: -65px;
  left: -30px;
}

.Under .icon {
  position: relative;
  top: -53px;
  left: 5px;
  float: right;
}
</style>