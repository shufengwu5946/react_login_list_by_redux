export const addTodo = (id,text) => {
    return {
        type: 'ADD_TODO',
        id,
        text
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

export const logOutSuccess = (loginInfo)=>{
    return {
        type: 'LOG_OUT_SUCCESS',
        loginInfo
    }
}

export const logOutFail = (loginInfo) =>{
    return {
        type: 'LOG_OUT_FAIL',
        loginInfo
    }
} 

export const logInSuccess = (loginInfo,userName,userId) =>{
    return {
        type: 'LOG_IN_SUCCESS',
        loginInfo,
        userName,
        userId
    }
} 

export const logInFail = (loginInfo) =>{
    return {
        type: 'LOG_IN_FAIL',
        loginInfo
    }
} 