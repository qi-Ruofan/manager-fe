<template>
  <div class="welcome">
    <h1>欢迎来到主界面--{{ msg }}</h1>
    <!-- <el-button>去登录</el-button> -->
    <router-link to="/login">去登录</router-link>
  </div>

</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: {
      typeof: String
    }
  }
}

// import { defineProps } from 'vue'
// defineProps({
//   msg: String
// })
</script>

<style lang='scss' scoped>
// .welcome {
//   background-color: #fff;
//   height: 100%;
// }
</style>
