import router from './index'
import store from '@/store'

//路由拦截器
const whiteList =['/login']
router.beforeEach(
    (to,from,next) =>{
        if(store.getters.token){
            if(to.path === '/login'){
                next('/')
            }else{
                next()
            }
        }else{
            if(whiteList.includes(to.path)){
                next()
            }else{
                next('/login')
            }
        }
    }
)