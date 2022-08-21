import request from './request'

export const getUserList:any = (params:any) =>{
    return request({
        url:'/users',
        method:'get',
        params
})
}

export const changeUserState:any = (uId:number,type:any) =>{
    return request({
        url:`/users/${uId}/state/${type}`,
        method:'put'
    })

}

export const addUserList:any = (data:any) => {
    return request({
        url:'/users',
        method:'post',
        data
    })
}

export const deleteUser:any = (uId:number) =>{
    return request({
        url:`users/${uId}`,
        method:'delete'
    })
}