import { push } from 'connected-react-router';
import fetchLogin from '../utils';
import getList from '../other/get-list';

// 增加todo列表项
export const addTodo = (title, userId) => ({
  type: 'ADD_TODO',
  title,
  userId,
});

// 删除todo列表项
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

// 加载todo列表成功
export const loadTodo = todos => ({
  type: 'LOAD_TODO',
  todos,
});

// 登出失败
export const logOutSuccess = () => ({
  type: 'LOG_OUT_SUCCESS',
});

// 登录成功
export const logInSuccess = (userName, userId) => ({
  type: 'LOG_IN_SUCCESS',
  userName,
  userId,
});

// 登录开始
export const logInStart = () => ({
  type: 'LOG_IN',
});

// 登录失败
export const logInFail = loginInfo => ({
  type: 'LOG_IN_FAIL',
  loginInfo,
});

// 设置用户名称
export const setUserName = userName => ({
  type: 'SET_USER_NAME',
  userName,
});

// 设置密码
export const setPassword = password => ({
  type: 'SET_PASSWORD',
  password,
});

// 设置登录loading
export const setLoginLoading = loading => ({
  type: 'SET_LOGIN_LOADING',
  loading,
});

export const loadTodosFail = () => ({
  type: 'LOAD_TODOS_FAIL',
});

// 登录，异步操作，采用react-thunk
export const login = () => {
  const func = (dispatch, getState) => {
    if ((!getState().userName) && getState().userName.length <= 0) {
      alert('用户名不能为空');
      return;
    }
    if ((!getState().password) && getState().password.length <= 0) {
      alert('密码不能为空');
      return;
    }
    dispatch(logInStart());

    fetchLogin(getState().userName, getState().password).then(
      (value) => {
        dispatch(logInSuccess(getState().userName, value.userId));
        dispatch(push('/dashboard'));
      },
      (error) => {
        dispatch(logInFail(error.error ? error.error : 'Uh oh,some error happened!'));
      },
    );
  };
  return func;
};

// 加载todo列表，异步操作，采用react-thunk
export const loadTodos = () => {
  const func = (dispatch, getState) => getList(getState().userId, (data) => {
    const todos = data;
    dispatch(loadTodo(todos));
  }, (error) => {
    console.log(error);
    dispatch(loadTodosFail());
  });
  return func;
};
