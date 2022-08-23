import request from './request'

//获取用户列表
export const getUserList:any = (params:any) =>{
    return request({
        url:'users',
        method:'get',
        params
})
}
//改变用户状态
export const changeUserState:any = (uId:number,type:any) =>{
    return request({
        url:`users/${uId}/state/${type}`,
        method:'put'
    })

}
//新增用户
export const addUserList:any = (data:any) => {
    return request({
        url:'users',
        method:'post',
        data
    })
}
//删除用户
export const deleteUser:any = (uId:number) =>{
    return request({
        url:`users/${uId}`,
        method:'delete'
    })
}
//编辑用户
export const updateUser:any =(data:any) =>{
    return request({
        url:`users/${data.id}`,
        method:'put',
        data
    })
}