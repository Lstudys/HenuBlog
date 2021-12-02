/**
*  FileDescription:axios拦截器
*  @Author: 李永晖
*  @CreatedDate:2021/12/02
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/02
*/


export default ({store,route,rediect,$axios}) =>{

    $axios.onRequest(config =>{
        const accessToken = store.state.accessToken;
        if(accessToken){
            config.headers.Authorization = 'Bearar ' + accessToken;
        }
        return config;
    })

    $axios.onResponse(response =>{
        return response;
    })

    $axios.onError(error =>{
        return error;
    })
}