import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router';
// import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { routerReducer } from '../router';

import initialState from './initialState';
import * as reducers from './index';


const rootReducer = combineReducers({
  reducers,
  routing: routerReducer
});


export const store = createStore(
  rootReducer,
  initialState,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// export const history = syncHistoryWithStore(browserHistory, store);
