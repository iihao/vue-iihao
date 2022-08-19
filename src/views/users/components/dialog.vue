<template>
  <el-dialog
    :model-value="props.modelValue"
    :title="props.title"
    width="30%"
    @close="handleClose"
  >
    <span>
      <el-form
        :rules="rules"
        label-position="left"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="用户" prop="username">
          <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formLabelAlign.password" type="password" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formLabelAlign.email" />
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="formLabelAlign.mobile" />
        </el-form-item>
      </el-form>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{
          $t('table.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { addUserList } from '@/api/user'
const formLabelAlign = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})
const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
  modelValue: boolean
  title: string
}>()

const handleClose = () => {
  emits('update:modelValue', false)
}
const handleConfirm = () => {
  addUserList(formLabelAlign.value)
  handleClose()
}

const rules = ref({
  username: [
    { required: true, message: '用户名必填', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名不能小于3个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码必填', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '邮箱必填', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [{ required: true, message: '手机号必填', trigger: 'blur' }]
})
</script>
<style lang="scss" scoped></style>
