import { combineReducers } from 'redux';
import PostListReducer from './postList';
import userListReducer from './userList';

const reducers = combineReducers({postListCombined: PostListReducer, userListCombined: userListReducer});

export default reducers;