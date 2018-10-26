import { LOGIN, REGISTER } from './types';

export function login(action) {
  return {
    type: LOGIN,
    payload: action.payload
  }
}

export function register(action) {
  return {
    type: REGISTER,
    payload: action.payload
  }
}
