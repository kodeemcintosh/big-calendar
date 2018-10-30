import { LOGIN, REGISTER } from './types';

export function login(action) {
  return {
    type: LOGIN,
    loginDetails: action.loginDetails
  }
}

export function register(action) {
  return {
    type: REGISTER,
    registrationDetails: action.registrationDetails
  }
}
