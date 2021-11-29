/**
 * 状态管理
 * created by 李永晖 on 2021/11/29
 */


const state = () =>({
    userInfo:null,
    accessToken:null,
    refreshToken:null
})


const mutations = {
    RESET_STATE(state){
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
    }
}


const actions = {

    login({commit}){
        commit('RESET_STATE');
        window.location.href = `http://localhost:8080/#/login?redirecturl=${window.location.href}`;
    }
}

export default{
    state,
    mutations,
    actions
}