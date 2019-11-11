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
import Users from '../views/subViews/Users'
import mechanism from '../views/subViews/mechanism'
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
    redirect:'/info',
    children:[
      {
        path: '/info',
        name: 'ComprehensiveInfo',
        component: ComprehensiveInfo,
      },
      {
        path: '/system',
        name: 'system',
        component: System,
        children:[
          {
            path:'mechanism',
            name:'mechanism',
            component:mechanism
          },
          {
            path:'users',
            name:'Users',
            component:Users
          }
        ],
        redirect:'/system/mechanism'
      },
      {
        path: '/bind',
        name: 'bind',
        component: Bind,
        children:[
          {
            path:'AccountObersve',
            name:'AccountObersve',
            component:AccountObersve
          },
          {
            path:'EquBind',
            name:'EquBind',
            component:EquBind
          }
        
          ],
        redirect:'/bind/AccountObersve'
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
  const token = localStorage.getItem('token')
  if(token || to.name === 'login'){
      next()
  }else {
      next({
        name: 'login',
        query: {
          redirect: to.path
        }
      })
  }
})



export default router
