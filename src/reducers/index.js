import { combineReducers } from 'redux'
import { todos } from './todos'
import { loginInfo, login, userName, userId, password, loading, progress } from './log';
import { connectRouter } from 'connected-react-router';

const todoApp = (history) => combineReducers({
  router: connectRouter(history),
  todos,
  loginInfo,
  login,
  userName,
  userId,
  password,
  loading,
  progress
})

export default todoApp