import { combineReducers } from 'redux';
import todos from './todos';
import {
  loginInfo, login, userName, userId, password, loading, progress,
} from './log';

const todoApp = combineReducers({
  todos,
  loginInfo,
  login,
  userName,
  userId,
  password,
  loading,
  progress,
});

export default todoApp;
