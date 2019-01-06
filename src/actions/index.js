import {
    fetchLogin
} from '../utils';
import getList from '../other/get-list';
import { createActions } from 'redux-actions';

export const { 
    addTodo,
    deleteTodo,
    loadTodo,
    logOutSuccess,
    logInSuccess,
    logInStart,
    logInFail,
    setUserName,
    setPassword,
    setLoginLoading
} = createActions({
    // 增加todo列表项
    ADD_TODO: (title ,userId) => ({ title,userId}),
    // 删除todo列表项
    DELETE_TODO:(id)=>({id}),
    // 加载todo列表成功
    LOAD_TODO:(todos)=>({todos}),
    // 登出失败
    LOG_OUT_SUCCESS:()=>({}),
    // 登录成功
    LOG_IN_SUCCESS:(userName,userId)=>({userName,userId}),
    // 登录开始
    LOG_IN:()=>({}),
    // 登录失败
    LOG_IN_FAIL:(loginInfo)=>({loginInfo}),
    // 设置用户名称
    SET_USER_NAME:(userName)=>({userName}),
    // 设置密码
    SET_PASSWORD:(password)=>({password}),
    // 设置登录loading
    SET_LOGIN_LOADING:(loading)=>({loading})


});

// 登录，异步操作，采用react-thunk
export const login = () => {
    return function (dispatch, getState) {
        if ((!getState().userName) && getState().userName.length <= 0) {
            alert("用户名不能为空");
            return;
        }
        if ((!getState().password) && getState().password.length <= 0) {
            alert("密码不能为空");
            return;
        }
        dispatch(logInStart());
        return fetchLogin(getState().userName, getState().password).then(
            value => {
                dispatch(logInSuccess(getState().userName, value.userId))
            },
            error => {
                dispatch(logInFail(error.error ? error.error : "Uh oh,some error happened!"));
            }
        );
    }
}

// 加载todo列表，异步操作，采用react-thunk
export const loadTodos = () => {
    return function (dispatch, getState) {
        return getList(getState().userId, (data) => {
            const todos = data;
            dispatch(loadTodo(todos));
        }, (error) => {
            console.log('error')
        });
    }
}



