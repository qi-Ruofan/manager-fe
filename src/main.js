import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'

// console.log('环境变量', process.env)
console.log('环境变量', import.meta)
console.log('环境变量', import.meta.env)
const app = createApp(App)

// app上全局挂载对象
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api

for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component);
}

app.use(router).use(store).use(ElementPlus)
.mount('#app')
