/**
 * Created by vito on 2017/4/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const myPlugin = store => {
    if (window.localStorage.aijiaUserdata) {
        const userInfo = JSON.parse(window.localStorage.aijiaUserdata);
        store.commit('SET_USERID', userInfo.userId);
        store.commit('SET_SESSIONID', userInfo.sessionId);
    }
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
    })
};

export default new Vuex.Store({
    state: {
        userId: '',
        sessionId: ''
    },
    actions,
    getters,
    mutations,
    strict: debug,
    plugins: [myPlugin]
})
