import Vue from 'vue'
import VueRouter from 'vue-router'
import Saguao from '@/views/Saguao/Saguao'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'saguao',
  component: Saguao
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;