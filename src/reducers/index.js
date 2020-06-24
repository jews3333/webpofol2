import portfolio from './portfolio';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    portfolioData: portfolio
});

export default reducer;