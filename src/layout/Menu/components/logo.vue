<template>
  <el-image
    style="width: 80%; height: 100%; padding-left: 28px"
    :src="logoUrl"
    :fit="fit"
    :class="{ toggleShow: !store.getters.siderType }"
  />
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()
const logoUrl = 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
const fit = ref('scale-down')
</script>

<style lang="scss" scoped>
.toggleShow {
  display: none;
}
</style>
