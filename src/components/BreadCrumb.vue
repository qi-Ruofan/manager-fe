<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <router-link to="/welcome" v-if="index == 0">
        {{ item.meta.title }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute();
let breadList = computed(() => route.matched);
</script>

<style lang='scss' scoped>

</style>
