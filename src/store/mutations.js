/**
 * mutations业务层数据提交
 */

import storage from "../utils/storage";

// 用户点击行为去dispatch一个action，action去commit一个mutation,mutation去保存状态
export default {
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  }
}
