import initialState from "../initialState";
import { SET_CURRENT_DATE } from "./types";


export function calendar(state = initialState.calendar, action) {

  switch(action.type) {

    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.currentDate
      }
  
    default:
      return state;
  }

};
