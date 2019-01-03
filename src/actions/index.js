import {fetchLogin} from '../utils';
import getList from '../other/get-list';
export const addTodo = (title,userId) => {
    return {
        type: 'ADD_TODO',
        title,
        userId
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const loadTodo = (todos) => {
    return {
        type: 'LOAD_TODO',
        todos
    }
}

export const logOutSuccess = () => {
    return {
        type: 'LOG_OUT_SUCCESS'
    }
}

export const logInSuccess = (userName, userId) => {
    return {
        type: 'LOG_IN_SUCCESS',
        userName,
        userId
    }
}

export const logInStart = () => {
    return {
        type: 'LOG_IN'
    }
}

export const logInFail = (loginInfo) => {
    return {
        type: 'LOG_IN_FAIL',
        loginInfo
    }
}

export const setUserName = (userName) => {
    return {
        type: 'SET_USER_NAME',
        userName
    }

}
export const setPassword = (password) => {
    return {
        type: 'SET_PASSWORD',
        password
    }
}

export const setLoginLoading = (loading) => {
    return {
        type: 'SET_LOGIN_LOADING',
        loading
    }
}

export const login = () => {
    return function(dispatch,getState){
        dispatch(logInStart());
        return fetchLogin(getState().userName, getState().password).then(
            value => {
                dispatch(logInSuccess(getState().userName,value.userId))
            },
            error => {
                dispatch(logInFail(error.error ? error.error : "Uh oh,some error happened!"));
            }
        );
    }
}

export const loadTodos = () => {
    return function(dispatch,getState){
        return getList(getState().userId, (data) => {
            const todos = data;
            dispatch(loadTodo(todos));
        },(error)=>{
            console.log('error')
        });
    }
}