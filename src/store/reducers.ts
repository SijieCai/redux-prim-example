import { combineReducers } from 'redux';
import userSlice from './userSlice';
import appSlice from './appSlice';

export default combineReducers({
  ...userSlice.reducer,
  ...appSlice.reducer
});