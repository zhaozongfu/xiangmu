import Vue from "vue"
import VueRouter from "vue-router"

import user from "../components/leftdata.vue"
import tab from "../components/rightdata.vue"
Vue.use(VueRouter)

const routes = [
    { path: "/", component: user },
    { path: "/deblf", component: tab }
]
const router = new VueRouter({
    routes
})
export default router