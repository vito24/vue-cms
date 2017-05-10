/**
 * Created by vito on 2017/5/4.
 */
import store from '@/store'
import axios from 'axios'

const getApi = (option) => {
    const userInfo = store.getters.userInfo;
    let url = '/api' + option.url + userInfo.userId + '/' + userInfo.sessionId;
    if (!option.login && option.login !== undefined) {
        url = '/api' + option.url;
    }
    return axios({
        method: option.method || 'get',
        url: url,
        data: option.data || {}
    })
};

export default getApi;
