<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">火星</div>
        <el-form-item prop="userName">
          <el-input v-model="user.userName" type="text" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="user.userPwd" type="text" :prefix-icon="View" />
        </el-form-item>
        <el-form-item>
          <el-button class="btn-login" type="primary" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <div>123</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { User, View } from "@element-plus/icons-vue"
import { useStore } from 'vuex'



const user = reactive({
  userName: '',
  userPwd: '',
})
const rules = {
  userName: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  userPwd: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ]
}

const userForm = ref(null)
const global = getCurrentInstance().appContext.config.globalProperties
const api = global.$api
const router = useRouter()
const store = useStore()

function handleSubmit() {
  userForm.value.validate((valid) => {
    if(valid) {
      const params = {
        userName: user.userName,
        userPwd: user.userPwd
      }
      api.login(params).then((res) => {
        store.commit('saveUserInfo', res)
        router.push('/welcome')
      })
    }
  })
}


// export default {
//   name: 'Login',
//   components: {
//   },
//   data() {
//     return {
//       account: '',
//       password: ''
//     }
//   },
//   mounted() {
//     const params = {
//       name: 'jack'
//     }
//     this.$request.get('/login', params).then(res => {
//       console.log(res)
//     })
//   },
//   methods: {
//     goHome() {
//       this.$router.push('/welcome')
//     }
//   }
// }
</script>

<style lang='scss'>
// scoped会添加很多垃圾样式
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      // line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
      color: #fff !important;
    }
  }
}
</style>
