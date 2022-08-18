import request from './request'

export const getUserList:any = (data:any) =>{
    return request({
        url:'/users',
        method:'get',
        data
})

}

