import portfolio from './portfolio';
import sidebar from './sidebar';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    portfolioData: portfolio,
    sidebarState: sidebar
});

export default reducer;