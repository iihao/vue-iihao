import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
//请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = localStorage.getItem('token') || ''
    if(config && config.headers){
      config.headers.Authorization =token
    }
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

//响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      ElMessage({
        message: meta.msg,
        type: 'success'
      })
      console.log(data)
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)
export default service
