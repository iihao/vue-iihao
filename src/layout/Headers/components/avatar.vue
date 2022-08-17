<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="circle" :size="40" :src="avatarPic">Admin</el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('app/logout')
}
const avatarPic = ref(
  'https://img1.baidu.com/it/u=1736291468,1260238399&fm=253&fmt=auto&app=138&f=JPEG?w=120&h=120'
)
</script>
<style lang="scss" scoped></style>
