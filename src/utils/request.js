/**
 * axios二次封装
 */
import axios from "axios";
import config from "../config";
import { ElMessage } from 'element-plus'
import router from "../router";
const TOKEN_INVALID = 'token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // To-Do
  // 统一添加token
  const headers = req.headers
  if(!headers.Authorization) headers.Authorization = 'Bear Jack'
  req.body = req.data
  // 转化参数 如：时间戳
  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  // 返回状态码判断
  if(code === 200) {
    return data
  } else if(code === 500001) { //登录失效
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 15000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})


/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns 
 */
function request(options) {
  // 判断请求类型
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  if(typeof options.mock != 'undefined') {
    config.mock = options.mock
  }

  if(config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method:item,
      ...options
    })
  }
})

export default request
