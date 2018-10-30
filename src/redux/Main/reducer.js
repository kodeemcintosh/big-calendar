import initialState from "../initialState";
import { SET_CURRENT_DATE, SET_PAGE_TITLE } from "./types";


export function main(state = initialState.main, action) {

  switch(action.type) {

    case SET_CURRENT_DATE:
      return {
        ...state,
        currentMonth: action.currentMonth
      }

    case SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.pageTitle
      }
  
    default:
      return state;
  }

};
