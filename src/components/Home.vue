<template>
  <div class="basic-layout">
    <!-- 侧边栏 -->
    <div class="nav-side">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
        <span>Manager</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#fff"
        router
        class="nav-menu"
      >
        <tree-menu
          :userMenu="userMenu"
        />
      </el-menu>
    </div>
    <!-- 右边内容 -->
    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle">
            <el-icon>
              <Fold />
            </el-icon>
          </div>
          <div class="bread">
            <bread-crumb></bread-crumb>
          </div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="!!noticeCount" class="notice">
            <el-icon>
              <Bell />
            </el-icon>
          </el-badge>
          <el-dropdown  @command="handleLogout">
            <span class="user-link">
              {{ userName }}
              <!-- <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon> -->
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱：{{ userEmail }}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TreeMenu from './TreeMenu.vue'
import BreadCrumb from './BreadCrumb.vue'
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const global = getCurrentInstance().appContext.config.globalProperties
const api = global.$api
let userInfo = global.$storage.getItem('userInfo')
const userName = userInfo.userName
const userEmail = userInfo.userEmail
let isCollapse = ref();

onMounted(() => {
  getMenuList()
  getNoticeCount()
})

// 获取侧边栏菜单
let activeMenu = ref(location.hash.slice(1));
let userMenu = ref([]);
async function getMenuList() {
  try {
    const res = await api.getMenuList();
    userMenu.value = res.menuList;
  } catch (error) {
    console.error(error);
  }
}

// 获取审批消息数
let noticeCount = ref(0)
async function getNoticeCount() {
  try {
    const res = await api.getNoticeCount();
    noticeCount.value = res;
  } catch (error) {
    console.error(error);
  }
}


// 退出登录
function handleLogout(key) {
  if(key === 'email') return;
  store.commit("saveUserInfo","")
  userInfo = null
  router.push('/login')
}


</script>

<style lang='scss' scoped>
.basic-layout {
  position: relative;
  .nav-side {
    // padding: 12px 20px;
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width .5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      border: none !important;

    }
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-style: 18px;
        }
        // .bread {
        //   display: inline-block;
        // }
      }
      .user-info {
        // display: flex;
        // align-items: center;
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
          line-height: 46px;
          // margin-left: 10px;
        }
      }
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
