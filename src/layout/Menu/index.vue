<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :default-active="defaultActive"
    unique-opened
    router
    :collapse="!store.getters.siderType"
  >
    <div class="sidebar-logo">
      <el-row>
        <el-col :span="20" class="logo"> <Logo /></el-col>
        <el-col :span="4" class="hamburger"> <Hamburger /></el-col>
      </el-row>
    </div>
    <el-sub-menu
      :index="item.path"
      v-for="(item, index) in menusList"
      :key="item.id"
      unique-opened="true"
    >
      <template #title>
        <el-icon><component :is="iconList[index]"></component></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="saveActive(it.path)"
      >
        <el-icon><component :is="iconCoin"></component></el-icon>
        {{ it.authName }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup lang="ts">
import { menuList } from '@/api/menu'
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
import Hamburger from './components/hamburger.vue'
import Logo from './components/logo.vue'
const defaultActive = ref(localStorage.getItem('activePath') || '/users')
const saveActive = (path: any) => {
  localStorage.setItem('activePath', `/${path}`)
}
const menusList = ref([] as any[])
const initMenusList = async () => {
  menusList.value = await menuList()
  //console.log(res)
}
initMenusList()

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const iconCoin = ref('coin')
</script>
<style lang="scss" scoped>
.el-row {
  height: 60px;
  width: 100%;
  box-shadow: 0 1px 2px rgb(136 136 136 / 5%);
  border-bottom: 1px solid #6d6d6d;
}
.el-col {
  align-self: center;
  margin-left: auto;
}
.hanburger {
  align-self: center;
  margin-left: auto;
  height: 100%;
  &:hover {
    background-color: bisque;
  }
}
</style>
