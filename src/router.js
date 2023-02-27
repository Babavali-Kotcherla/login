import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '@/views/Login.vue'
import WelcomeUser from '@/components/WelcomeUser.vue'

Vue.use(VueRouter)

const routes = [
  //{
    //path: '/',
    //name: 'Login',
    //component: Login
  //},
  {
    path: '/welcome-user',
    name: 'WelcomeUser',
    component: WelcomeUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
