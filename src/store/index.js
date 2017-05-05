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

export default new Vuex.Store({
    state: {
        count: 10
    },
    actions,
    getters,
    mutations,
    strict: debug
})
