<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app',
  mounted() {
    // this.$storage.setItem('userInfo', {age:18, name: 'qrf'})
    // console.log('user => ', this.$storage.getItem('userInfo'))
    // this.$storage.clearItem('userInfo')
    // this.$storage.clearAll()
  }
}
</script>
<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/index.scss';
</style>
