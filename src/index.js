import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers/index';
import App from './App';
import { connect } from 'react-redux'
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { IntlProvider, addLocaleData } from 'react-intl';
import zh_CN from './i18n/zh_CN';
import en_US from './i18n/en_US';

addLocaleData([...en, ...zh]);

let store = createStore(todoApp, applyMiddleware(thunk));

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const TodoApp = connect(mapStateToProps)(App);

ReactDOM.render(<Provider store={store}>
  <IntlProvider
    locale='zh'
    messages={zh_CN}
  >
    <TodoApp />
  </IntlProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


