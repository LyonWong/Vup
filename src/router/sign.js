import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../pages/sign/Index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/sign',
    component: () => import("../pages/sign/Index.vue")
  },
  {
    path: '/sign/user',
    component: () => import('../pages/sign/User')
  },
  {
    path: '/sign/password',
    component: () => import('../pages/sign/Password.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router