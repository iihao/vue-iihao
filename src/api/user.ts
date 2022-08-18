import request from './request'

export const getUserList:any = (params:any) =>{
    return request({
        url:'/users',
        method:'get',
        params
})

}

