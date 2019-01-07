import React, { useReducer } from 'react';
import todoApp from './reducers';
import App from './App';

export const TodoContext = React.createContext(null);

function RootComponent(props) {

    const [state, dispatch] = useReducer(todoApp, {
        todos: [],
        loginInfo: '',
        login: false,
        userName: '',
        userId: 0,
        password: '',
        loading: false,
        progress: false
    });
    
    return (
        <div>
            <TodoContext.Provider value={{ state, dispatch }}>
                <App />
            </TodoContext.Provider>
        </div>

    );
}

export default RootComponent;