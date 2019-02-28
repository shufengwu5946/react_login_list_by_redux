import {
    fetchLogin
} from '../utils';
import getList from '../other/get-list';
import { push } from 'connected-react-router';

// 增加todo列表项
export const addTodo = (title, userId) => {
    return {
        type: 'ADD_TODO',
        title,
        userId
    }
}

// 删除todo列表项
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

// 加载todo列表成功
export const loadTodo = (todos) => {
    return {
        type: 'LOAD_TODO',
        todos
    }
}

// 登出失败
export const logOutSuccess = () => {
    return {
        type: 'LOG_OUT_SUCCESS'
    }
}

// 登录成功
export const logInSuccess = (userName, userId) => {
    return {
        type: 'LOG_IN_SUCCESS',
        userName,
        userId
    }
}

// 登录开始
export const logInStart = () => {
    return {
        type: 'LOG_IN'
    }
}

// 登录失败
export const logInFail = (loginInfo) => {
    return {
        type: 'LOG_IN_FAIL',
        loginInfo
    }
}

// 设置用户名称
export const setUserName = (userName) => {
    return {
        type: 'SET_USER_NAME',
        userName
    }

}

// 设置密码
export const setPassword = (password) => {
    return {
        type: 'SET_PASSWORD',
        password
    }
}

// 设置登录loading
export const setLoginLoading = (loading) => {
    return {
        type: 'SET_LOGIN_LOADING',
        loading
    }
}

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
                dispatch(logInSuccess(getState().userName, value.userId));
                dispatch(push('/dashboard'));
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



