<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">小齐通用后台管理系统</div>
      <div class="desc">- Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统</div>
    </div>
    <div class="img"></div>
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

<style lang='scss'>
.welcome {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    position: relative;
    bottom: 40px;
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      text-align: left;
      font-size: 14px;
      color: #999;
    }
  }
  .img {
    margin-left: 105px;
    background: url(./../assets/images/welcome.png) no-repeat;
    width: 371px;
    height: 438px;
  }
}
</style>
