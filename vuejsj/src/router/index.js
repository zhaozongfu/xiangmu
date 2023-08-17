import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FanJu from '../components/FanJu.vue'
import GuoMan from '../components/GuoMan.vue'
import Detail from '../components/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: { name: "home", }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: "fanju",
        name: "fanju",
        component: FanJu,
        children: [
          {
            name: "fjdata",
            path: "detail",
            component:Detail,
          }
        ]
      },
      {
        path: "guoman",
        name: "guoman",
        component: GuoMan
      }
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
