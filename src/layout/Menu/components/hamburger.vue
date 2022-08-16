<template>
  <div class="hamburger-comtainer" @click="toggleClick">
    <el-icon size="20px" color="#FFF">
      <component :is="icon"></component>
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const icon = computed(() => {
  return store.getters.siderType ? 'Fold' : 'Expand'
})

const toggleClick = () => {
  store.commit('app/changeSiderType')
}
</script>
<style lang="scss" scoped>
.hamburger-comtainer {
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  float: right;
}
</style>
