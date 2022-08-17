<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
      <span
        v-if="index === breadList.length - 1"
        style="color: rgb(142 142 142)"
        >{{ $t(`menus.${String(item.name)}`) }}</span
      >
      <span v-else style="color: #ddd">{{
        $t(`menus.${String(item.name)}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { RouteLocationMatched, useRoute } from 'vue-router'
import { Ref, ref, watch } from 'vue'
const route = useRoute()
const breadList: Ref<RouteLocationMatched[]> = ref([])
const initBreadList = () => {
  breadList.value = route.matched
  console.log(route.matched)
}
watch(
  route,
  () => {
    initBreadList()
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss" scoped></style>
