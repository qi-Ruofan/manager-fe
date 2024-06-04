/**
 * api管理
 */

import request from "../utils/request";

export default {
  login(params, options) {
    return request({
      url: '/users/login',
      data: params,
      method: 'post',
    })
  },
  getMenuList(params, options) {
    return request({
      url: '/users/getPermissionList',
      data: params,
      method: 'post',
    })
  },
  getNoticeCount(params, options) {
    return request({
      url: '/leave/count',
      data: {},
      method: 'get',
    })
  }
}
