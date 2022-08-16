<template>
  <el-container class="app-container">
    <el-aside class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: !store.getters.siderType }"
    >
      <el-header><Headers></Headers></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Headers from './Headers/index.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const autoWidth = computed(() => {
  return store.getters.siderType ? '210px' : '67px'
})
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: v-bind(autoWidth);
}
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
