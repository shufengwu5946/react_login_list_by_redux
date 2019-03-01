import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import todoApp from './reducers/index';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoApp(history));
export const store = createStore(
  persistedReducer,
  applyMiddleware(routerMiddleware(history), thunk),
);
export const persistor = persistStore(store);
