import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/router/permission'
import i18n from './i18n'
import filters from './utils/filters'
import 'default-passive-events'
// 定义了全局方法之后需要扩充类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
filters(app)
app.use(store).use(router).use(i18n).mount('#app')