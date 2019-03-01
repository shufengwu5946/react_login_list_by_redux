import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
// import todoApp from './reducers/index';
import { PersistGate } from 'redux-persist/integration/react';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import { store, history, persistor } from './configureStore';

// const history = createBrowserHistory();
// const store = createStore(todoApp(history), applyMiddleware(routerMiddleware(history), thunk));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={LogIn} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
