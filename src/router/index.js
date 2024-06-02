import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    meta: {
      title: '首页',
    },
    children: [
      {
        name: 'Welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页',
        },
        component: Welcome
      },
      {
        name: 'Login',
        path: '/login',
        meta: {
          title: '登录页',
        },
        component: Login
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
