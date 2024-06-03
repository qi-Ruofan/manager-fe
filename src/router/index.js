import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../components/Home.vue'
// import { ro } from 'element-plus/es/locale'
import store from '../store'
import { useRouter } from 'vue-router'

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
        component: () => import('./../views/Welcome.vue')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('./../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
