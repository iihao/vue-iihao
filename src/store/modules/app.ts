import { login as loginApi } from '@/api/login'
import router  from '@/router'
export default {
    namespaced:true,
    state :() =>({
        token : localStorage.getItem('token')
    }),
    mutations : {
        setToken(state : any ,token: string){
            state.token  = token
            localStorage.setItem('token',token)
        }
    },
    actions:{
        login({commit}: any,userInfo: any){
            return new Promise<void>(
                (resolve,reject) =>{
                    loginApi(userInfo).then(
                        (res: { token: any }) =>{
                            commit('setToken',res.token)
                            console.log(res.token)
                            router.replace('/')
                            resolve()
                        }
                    ).catch((err: any) =>{reject(err)})
                }
            )
        }

    }

}