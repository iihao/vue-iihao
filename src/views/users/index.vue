<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="8"
        ><el-input v-model="queryForm.query" placeholder=""></el-input
      ></el-col>
      <el-button type="primary">
        <el-icon style="vertical-align: middle"> <Search /> </el-icon>
        <span> {{ $t('table.search') }} </span></el-button
      >
      <el-button type="primary">{{ $t('table.adduser') }}</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%,padding-top:15px">
      <el-table-column
        :prop="item.prop"
        :label="item.lable"
        v-for="(item, index) in options"
        :key="index"
      />
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getUserList } from '@/api/user'
import { options } from './options'
const tableData = ref([])
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 4
})
const initUserList = async () => {
  const res = await getUserList(queryForm.value)
  console.log(res)
}
initUserList()
</script>

<style lang="scss" scoped></style>
