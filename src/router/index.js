import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '@/components/Auth/Registration'
import Login from '@/components/Auth/Login'
import Home from '@/components/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/registration',
    name:'registration',
    component: Registration
  },
  {
    path: '/login',
    name:'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
