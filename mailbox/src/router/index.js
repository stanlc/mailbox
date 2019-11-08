import Vue from 'vue'
import VueRouter from 'vue-router'
import System from '../views/System'
import Bind from '../views/Bind'
import Equipment from '../views/Equipment'
import Obersve from '../views/Obersve'
import Log from '../views/Log'
import ComprehensiveInfo from '../views/ComprehensiveInfo'
import AccountObersve from '../views/subViews/AccountObersve'
import EquBInd from '../views/subViews/EquBInd'

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
    component: Bind,
    children:[
      {
        path:'/',
        name:'AccountObersve',
        component:AccountObersve
      },
      {
        path:'EquBInd',
        name:'EquBInd',
        component:EquBInd
      }

  ]
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Equipment
  },
  {
    path: '/obersve',
    name: 'obersve',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Obersve
  },
  {
    path:'/log',
    name:'log',
    component:Log
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
