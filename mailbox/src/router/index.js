import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import System from '../views/System'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info',
    name: 'home',
    component: Home
  },
  {
    path: '/system',
    name: 'system',
    component: System
  },
  {
    path: '/obersve',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
