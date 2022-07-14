import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Helloworld from '@/pages/Helloworld'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello-world',
    name: 'Helloworld',
    component: Helloworld
  },
  {
    path: '/hello-world/:name',
    name: 'HelloName',
    component: Helloworld
  },
  {
    path: '*', // will match everything
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
