import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {Provider} from 'react-redux'
import { uiReducer } from './reducers/uiReducer';

const store = createStore(uiReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
);

export default store;