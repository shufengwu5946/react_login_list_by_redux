
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
