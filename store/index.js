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

    // 重置用户信息和令牌
    RESET_STATE(state){
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
    },

    // 设置用户信息和令牌
    UPDATE_STATE(state,data){
        state.userInfo = data.userInfo;
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
    }
}


const actions = {

    login({commit}){
        commit('RESET_STATE');
        window.location.href = `http://localhost:8080/#/login?redirecturl=${window.location.href}`;
    },

    nuxtServerInit({commit},{app}){
        const data = {};
        data.userInfo = app.$cookies.get('userInfo');
        data.accessToken = app.$cookies.get('accessToken');
        data.refreshToken = app.$cookies.get('refreshToken');
        commit('UPDATE_STATE',data);
    },
}

export default{
    state,
    mutations,
    actions
}