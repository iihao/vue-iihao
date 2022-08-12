import request from './request'

export const menuList: any = (data: any)=>{
    return request({
        url:'/menus',
        method:'get',
        data
    })
}