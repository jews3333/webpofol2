import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const portfolio = createAction(types.PORTFOLIO);
export const sidebarShow = createAction(types.SIDEBAR_SHOW);
export const sidebarHide = createAction(types.SIDEBAR_HIDE);