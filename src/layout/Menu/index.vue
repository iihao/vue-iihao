<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :default-active="defaultActive"
    unique-opened
    router
  >
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
        <el-icon><component :is="iconList[1]"></component></el-icon>
        {{ it.authName }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup lang="ts">
import { menuList } from '@/api/menu'
import { ref } from 'vue'
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
</script>
<style lang="scss"></style>
