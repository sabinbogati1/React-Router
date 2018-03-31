import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from "./routes";
import {Router, browserHistory} from "react-router";
import reducers from './reducers';
import promise from "redux-promise";
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  
  <Router history={browserHistory} >{routes}</Router>
   


  </Provider>
  , document.querySelector('.container'));
 