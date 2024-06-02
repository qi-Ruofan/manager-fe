/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  "development": {
    baseApi: '/',
    mockApi: 'http://127.0.0.1:4523/m1/4382461-0-default'
  },
  "test": {
    baseApi: 'https://www.fastmock.site/mock/726fefe7c0fa209c9e1d886f631e99d0/api',
    mockApi: 'http://127.0.0.1:4523/m1/4382461-0-default'
  },
  "prod": {
    baseApi: '//futurefe.com/api',
    mockApi: 'http://127.0.0.1:4523/m1/4382461-0-default'
  }
}

export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}
