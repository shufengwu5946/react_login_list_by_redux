
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




