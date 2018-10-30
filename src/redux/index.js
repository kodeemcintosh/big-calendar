import { combineReducers } from 'redux';
import { routerReducer } from '../router';

import { main } from './Main';
import { authentication } from './Auth';
import { calendar } from './Calendar';


export default combineReducers({
  routing: routerReducer,
  authentication,
  calendar,
  main });
