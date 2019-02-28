import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers/index';
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom'
import LogIn from './LogIn';
import Dashboard from './Dashboard';

const history = createBrowserHistory();
let store = createStore(todoApp(history), applyMiddleware(routerMiddleware(history), thunk));

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={LogIn} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


