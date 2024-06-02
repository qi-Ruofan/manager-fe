<template>
  <h1>欢迎来到登录页</h1>
  <Welcome msg="jack"/>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//   router.push('/welcome')
// }
import Welcome from './Welcome.vue';
export default {
  name: 'Login',
  components: {
    Welcome
  },
  mounted() {
    const params = {
      name: 'jack'
    }
    this.$request.get('/login', params).then(res => {
      console.log(res)
    })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
