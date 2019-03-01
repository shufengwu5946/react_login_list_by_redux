import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { IntlProvider, addLocaleData } from 'react-intl';
import App from './App';
import todoApp from './reducers/index';
import zhCN from './i18n/zhCN';
// import enUS from './i18n/enUS';

addLocaleData([...en, ...zh]);

const store = createStore(todoApp, applyMiddleware(thunk));

const mapStateToProps = state => ({
  login: state.login,
});

const TodoApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      locale="zh"
      messages={zhCN}
    >
      <TodoApp />
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
