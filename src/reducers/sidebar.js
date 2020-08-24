import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    sidebar: true
}

const sidebar = handleActions({
    [types.SIDEBAR_SHOW]: (state, action) => {
        return {
            sidebar: true
        }
    },
    [types.SIDEBAR_HIDE]: (state, action) => {
        return {
            sidebar: false
        }
    }
}, initialState);

export default sidebar;