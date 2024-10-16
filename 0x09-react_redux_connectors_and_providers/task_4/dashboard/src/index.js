import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {Provider} from 'react-redux'
import { rootReducer } from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
);

export default store;