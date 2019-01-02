// import {} from '../actions/index';

export const loginInfo = (state = '', action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return '';
        case 'LOG_IN_FAIL':
            return action.loginInfo;
        default:
            return state;
    }
}


export const login = (state = false, action) => {
    switch (action.type) {
        case 'LOG_OUT_SUCCESS':
            return false;
        case 'LOG_IN_SUCCESS':
            return true;
        case 'LOG_IN_FAIL':
            return false;
        default:
            return state;
    }
}

export const userName = (state = '', action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return action.userName;
        case 'SET_USER_NAME':
            return action.userName;
        default:
            return state;
    }
}

export const userId = (state = 0, action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return action.userId;
        default:
            return state;
    }
}

export const password = (state = '', action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            return action.password;
        default:
            return state;
    }
}

export const loading = (state = false, action) => {
    switch (action.type) {
        case 'LOG_OUT_SUCCESS':
            return false;
        case 'LOG_IN_SUCCESS':
            return false;
        case 'LOG_IN_FAIL':
            return false;
        case 'LOG_IN':
            return true;
        default:
            return state;
    }
}




