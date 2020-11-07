import { combineReducers } from 'redux';
import { userReducer } from './userSlice';
import { appReducer } from './appSlice';

export default combineReducers({
  user: userReducer,
  app: appReducer
})