/**
 * Created by vito on 2017/4/11.
 */
import {
    SET_USERINFO,
} from './mutation-types'

export default {
    [SET_USERINFO] (state, userInfo) {
        state.userInfo = userInfo;
    }
}
