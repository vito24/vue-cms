/**
 * Created by vito on 2017/5/4.
 */
import store from '@/store'
import axios from 'axios'

const getApi = (option) => {
    let url = `/api${option.url}${store.getters.userId}/${store.getters.sessionId}`;
    if (!option.login && option.login !== undefined) {
        url = `/api${option.url}`;
    }
    return axios({
        method: option.method || 'get',
        url: url,
        data: option.data || {}
    })
};

export default getApi;
