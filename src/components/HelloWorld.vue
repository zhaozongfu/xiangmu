<template>

    <div id="box">
      <headers></headers>
      <Unders></Unders>
    </div>
</template>

<script>
const headers = {
  name: "headers",
  template: `
            <div class="header">
                <span>微信读书</span><br/>
                <svg t="1691066616955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2598" id="mx_n_1691066616956" width="16" height="16"><path d="M756.565333 697.258667c2.133333 1.493333 4.224 3.157333 6.101334 5.12l241.664 241.621333c16.256 16.256 16.512 43.52-0.128 60.16a42.453333 42.453333 0 0 1-60.202667 0.170667l-241.664-241.664a41.429333 41.429333 0 0 1-5.034667-6.101334A424.917333 424.917333 0 0 1 426.666667 853.333333C191.018667 853.333333 0 662.314667 0 426.666667S191.018667 0 426.666667 0s426.666667 191.018667 426.666666 426.666667c0 102.698667-36.266667 196.949333-96.768 270.592zM426.666667 768a341.333333 341.333333 0 1 0 0-682.666667 341.333333 341.333333 0 0 0 0 682.666667z" fill="#8a8a8a" p-id="2599"></path></svg><input type="text" placeholder="搜索">
            </div>
           
            `,
}
const Unders = {
  name: "Unders",
  template: `
            <div class="Under">
            </div>
           
            `,
}
export default {
  el: "#box",
  components: {
    headers,
    Unders,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

html {
  font-size: 31.25px;
  overflow: hidden;
}

.header {
  position: relative;
  width: 12rem;
  height: 4.18rem;
  text-align: center;
  font-size: 0.8rem;

}

.header span {
  font-weight: 700;
  position: relative;
  top: 0.5rem;

}

.header input {
  width: 10rem;
  height: 1.4rem;
  padding-left: 1rem;
  border-radius: 2rem;
  position: relative;
  top: 1rem;
  border: none;
  background-color: #F5F7F9;
  font-size: 0.5rem;
  outline: none;
}

.header .icon {
  z-index: 1;
  position: relative;
  top: 1.1rem;
  left: 0.8rem;
}

.Under {
  width: 10.5rem;
  height: 5rem;
  background-color: #56585f;
  margin: auto;
  border-radius: 0.4rem;
}
</style>
<script>
 (function () {
        var styleNode = document.createElement("style");
        var w = document.documentElement.clienwidth;
        var w = document.documentElement.clientWidth / 12;
        styleNode.innerHTML = "html{font-size:" + w + "px!important}";
        document.head.appendChild(styleNode);
    }
    )()
</script>
