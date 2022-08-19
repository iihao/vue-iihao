import dayjs from 'dayjs'
//判空方法
export const isNull = (date: any) =>{
    if(!date) return true
    if(JSON.stringify(date)==='{}') return true
    if(JSON.stringify(date)==='[]') return true
}

const formatTimes = (val:any,format='YYYY-MM-DD') =>{
    if(!isNull(val)){
        val = parseInt(val) *1000
        return  dayjs(val).format(format)
    }else{
        return '--'
    }
}
//全局属性
export default (app:any) =>{
    app.config.globalProperties.$filters={
        formatTimes
    }
}
