import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
import todoApp from './reducers/index';
import App from './App';
import { connect } from 'react-redux'

let store = createStore(todoApp,applyMiddleware(thunk));

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const TodoApp = connect(mapStateToProps)(App);

ReactDOM.render(<Provider store={store}>
<TodoApp/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


