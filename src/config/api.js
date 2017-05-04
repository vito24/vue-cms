/**
 * Created by sun on 2017/5/4.
 */
import axios from 'axios'

const getApi = (option) => {
    let url = '/api' + option.url + '458/55F471CFFF7D0815A425F0AC538E10DB';
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
