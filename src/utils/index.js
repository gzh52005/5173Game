// 封装获取路由参数的方式
export function searchFormat(search){
    if(search.startsWith('?')){
        search=search.slice(1)
    }
    const params =search.split('&').reduce((obj,item)=>{
        const arr=item.split('=')
        obj[arr[0]]=arr[1]
        return obj
    },{})
    return params
}