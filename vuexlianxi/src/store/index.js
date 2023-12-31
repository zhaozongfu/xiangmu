import Vue from 'vue'
import Vuex from 'vuex'	// 引入Vuex
Vue.use(Vuex)	// 应用Vuex插件
const state = {
    sum: 0,//当前的和
    weather:"小雨天气",
    mood:"闷热",

}
const actions = {
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了')
        if (context.state.sum % 2) {
            context.commit('jia', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了')
        setTimeout(() => {
            context.commit('jia', value)
        }, 1500)
    }
}
// 准备mutations——用于操作数据（state）
const mutations = {
    jia(state, value) {
        console.log('mutations中的JIA被调用了')
        state.sum += value
    },
    jian(state, value) {
        console.log('mutations中的JIAN被调用了')
        state.sum -= value
    }
}
// 准备state——用于存储数据

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})