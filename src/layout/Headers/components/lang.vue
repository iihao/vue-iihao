<template>
  <el-dropdown :hide-on-click="true" @command="handleCommand">
    <span class="el-dropdown-link">
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        data-v-dd9c9540=""
      >
        <path
          fill="currentColor"
          d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
        ></path>
      </svg>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="currentLang === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="currentLang === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const i18n = useI18n()
const currentLang = computed(() => {
  return i18n.locale.value
})

const handleCommand = (val: any) => {
  store.commit('app/changeLang', val), (i18n.locale.value = val)
}
/* 调试用
console.log(`vuex:${store.getters.lang}`)
console.log(`local:${localStorage.getItem('lang')}`)
console.log(`i18n:${i18n.locale.value}`)
*/
</script>
<style lang="scss" scoped></style>
