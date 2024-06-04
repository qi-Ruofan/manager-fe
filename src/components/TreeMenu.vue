<template>
  <template v-for="menu in userMenu">
    <el-sub-menu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :key="menu._id"
      :index="menu.path"
      class="sub-menu"
    >
      <template #title>
        <component style="width: 16px;" :is="menu.icon"></component>
        <span style="margin-left: 5px;">{{ menu.menuName }}</span>
      </template>
      <tree-menu :userMenu="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else-if="menu.menuType == 1"
      :index="menu.path"
      :key="menu._id+1"
      >{{ menu.menuName }}</el-menu-item
    >
  </template>
</template>

<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
  userMenu: {type:Array, default: []}
})
console.log(props.userMenu)
</script>

<style lang='scss' scoped>
.sub-menu {
  
}
</style>
