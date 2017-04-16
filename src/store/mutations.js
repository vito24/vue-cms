/**
 * Created by sun on 2017/4/11.
 */
import {
    INCREMENT
} from './mutation-types'

export default {
    [INCREMENT] (state) {
        state.count ++;
    }
}
