/**
 * Created by sun on 2017/5/4.
 */
import axios from 'axios'

const getApi = (option) => {
    let userInfo = {};
    if (window.localStorage.aijiaUserdata) {
        userInfo = JSON.parse(window.localStorage.aijiaUserdata);
    }
    let url = `/api${option.url}${userInfo.userId}/${userInfo.sessionId}`;
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
