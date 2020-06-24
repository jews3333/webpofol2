import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    portfolio: null
}

const portfolio = handleActions({
    [types.PORTFOLIO]: (state, action) => {
        return {
            portfolio: action.payload
        }
    }
}, initialState);

export default portfolio;