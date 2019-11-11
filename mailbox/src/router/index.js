import Vue from 'vue'
import VueRouter from 'vue-router'
import System from '../views/System'
import Bind from '../views/Bind'
import Equipment from '../views/Equipment'
import Obersve from '../views/Obersve'
import Log from '../views/Log'
import ComprehensiveInfo from '../views/ComprehensiveInfo'
import AccountObersve from '../views/subViews/AccountObersve'
import EquBind from '../views/subViews/EquBind'
import login from '../views/login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
    children:[
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
            path:'EquBind',
            name:'EquBind',
            component:EquBind
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
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //用你的方式获取登录的用户信息
  const userinfo = localStorage.userinfo
  if(userInfo || to.name === 'Login'){
      //如果存在用户信息，或者进入的页面是登录页面，则直接进入
      next()
  }else {
      //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
      //如未登录用户进入用户中心的页面地址，检测到未登录，
      //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
      next({
        name: 'Login',
        query: {
          redirect: to.path
        }
      })
  }
})

export default router
