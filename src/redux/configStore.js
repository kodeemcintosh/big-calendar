import { createStore, applyMiddleware, compose} from 'redux';
import loggerMiddleware from './logger';
import monitorReducerEnhancer from './perfMonitor';
import thunkMiddleware from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './index';

const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(
  middleware,
  monitorReducerEnhancer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);
