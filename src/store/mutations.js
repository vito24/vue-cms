/**
 * Created by vito on 2017/4/11.
 */
import {
    SET_USERID,
    SET_SESSIONID
} from './mutation-types'

export default {
    [SET_USERID] (state, userId) {
        state.userId = userId;
    },
    [SET_SESSIONID] (state, sessionId) {
        state.sessionId = sessionId;
    }
}
