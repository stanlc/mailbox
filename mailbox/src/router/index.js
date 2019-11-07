import Vue from 'vue'
import VueRouter from 'vue-router'
import System from '../views/System'
import Bind from '../views/Bind'
import Equipment from '../views/Equipment'
import ComprehensiveInfo from '../views/ComprehensiveInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info',
    name: 'ComprehensiveInfo',
    component: ComprehensiveInfo,
  },
  {
    path: '/system',
    name: 'system',
    component: System
  },
  {
    path: '/bind',
    name: 'bind',
    component: Bind
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Equipment
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
