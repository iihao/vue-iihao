<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="8"
        ><el-input
          v-model="queryForm.query"
          clearable
          placeholder=""
          @keyup.enter.native="initUserList"
        ></el-input
      ></el-col>
      <el-button type="primary" @click="initUserList">
        <el-icon style="vertical-align: middle"> <Search /> </el-icon>
        <span> {{ $t('table.search') }} </span></el-button
      >
      <el-button type="primary" @click="handleDialog(null)">{{
        $t('table.adduser')
      }}</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%" table-layout="auto">
      <el-table-column
        :prop="item.prop"
        :label="$t(`table.${item.lable}`)"
        :width="item.width"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop == 'mg_state'">
          <el-switch v-model="row.mg_state" @change="changeUser(row)" />
        </template>
        <template v-slot="{ row }" v-else-if="item.prop == 'create_time'">
          {{ $filters.formatTimes(row.create_time) }}
        </template>
        <template v-slot="{ row }" v-else-if="item.prop == 'action'">
          <el-button type="primary" size="small" @click="handleDialog(row)"
            ><el-icon><Edit /></el-icon
          ></el-button>
          <el-button type="warning" size="small"
            ><el-icon><Setting /></el-icon
          ></el-button>
          <el-button type="danger" size="small" @click="handleDel(row)"
            ><el-icon><Delete /></el-icon
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-affix position="bottom" :offset="20">
    <el-pagination
      v-model:currentPage="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[5, 10, 20, 30]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableTotal"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-affix>
  <Dialog
    v-model="dialogVisible"
    :title="addUserTitle"
    @reUserList="initUserList()"
    :dialogTableValue="dialogTableValue"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { getUserList, changeUserState, deleteUser } from '@/api/user'
import { options } from './options'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/dialog.vue'
import { isNull } from '@/utils/filters'
const i18n = useI18n()
const tableData = ref([])
const tableTotal = ref(0)
const dialogVisible = ref(false)
const addUserTitle = ref('')
const dialogTableValue = ref({})
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
/*
watch(
  dialogVisible,
  async (newDv) => {
    return await initUserList(), console.log(newDv)
  },
  { deep: true }
)*/

const initUserList = async () => {
  const res = await getUserList(queryForm.value)
  //console.log(res)
  tableData.value = res.users
  tableTotal.value = res.total
}
initUserList()

const handleSizeChange = (pages: number) => {
  queryForm.value.pagesize = pages
  initUserList()
}
const handleCurrentChange = (pagen: number) => {
  queryForm.value.pagenum = pagen
  initUserList()
}
const handleDel = async (info: any) => {
  await deleteUser(info.id)
  ElMessage({
    message: i18n.t('message.deleteSuccess'),
    type: 'success'
  })
  initUserList()
}
const changeUser = async (info: any) => {
  await changeUserState(info.id, info.mg_state)
  ElMessage({
    message: i18n.t('message.updeteSuccess'),
    type: 'success'
  })
}

const handleDialog = (info: any) => {
  if (isNull(info)) {
    addUserTitle.value = '新增用户'
    dialogTableValue.value = {}
  } else {
    //updateUser(info.id)
    addUserTitle.value = '修改用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(info))
  }
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 28px;
}
</style>
