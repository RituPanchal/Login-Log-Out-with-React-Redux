import { combineReducers } from 'redux';
import fetchDataReducer from './fetchdata';
import fetchUserAuthDataReducer from './fetchUserAuthData';
import loadingReducer from './loading';

const reducer = combineReducers({ notes: fetchDataReducer, userAuthData: fetchUserAuthDataReducer, loadingStatus: loadingReducer});

export default reducer;