import { SET_CURRENT_DATE } from './types';


export function setCurrentDate(action) {
  return {
    type: SET_CURRENT_DATE,
    currentDate: action.currentDate
  }
}