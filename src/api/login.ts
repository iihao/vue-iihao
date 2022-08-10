import request from './request'

export const login: any = (data: any)=>{
    return request({
        url:'/login',
        method:'POST',
        data
    })
}