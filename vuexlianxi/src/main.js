import Vue from 'vue'
import App from './App.vue'
import store from './store'	// 引入store

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,										// 配置项添加store
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
