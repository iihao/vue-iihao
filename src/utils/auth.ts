
import { TOKEN_TIME ,TOKEN_TIME_VALUE } from "./constant"

const getDate :number = Date.now()
//登录时设置时间
export const setTokenTime = () =>{
    localStorage.setItem(TOKEN_TIME,getDate.toString())
}

//获取时间
export const getTokenTime = () =>{
    if(localStorage.getItem(TOKEN_TIME)){
        return localStorage.getItem(TOKEN_TIME)
    }
}

//比较时间 判断是否过期
export const diffTokenTime = () =>{
    const tokenTime = Number(getTokenTime())
    if(getDate&&tokenTime){
        return  getDate - tokenTime > TOKEN_TIME_VALUE
    }
    
}