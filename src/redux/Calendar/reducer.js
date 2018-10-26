import initialState from "../initialState";
import { 
  // SET_DAYS_IN_WEEK, SET_CURRENT_WEEK_IN_MONTH, SET_WEEKS_IN_MONTH, SET_DAYS_IN_MONTH, SET_MONTHS_IN_YEAR,
  SET_DAYS_IN_YEAR } from "./types";


export default function calendar(state = initialState.day, action) {

  switch(action.type) {

    // case SET_DAYS_IN_WEEK:
    //   return {
    //     ...state,
    //     daysInWeek: action.daysInWeek
    //   }
    // case SET_CURRENT_WEEK_IN_MONTH:
    //   return {
    //     ...state,
    //     currentWeekInMonth: action.currentWeekInMonth
    //   }
    // case SET_DAYS_IN_MONTH:
    //   return {
    //     ...state,
    //     daysInMonth: action.daysInMonth
    //   }
    // case SET_WEEKS_IN_MONTH:
    //   return {
    //     ...state,
    //     weeksInMonth: action.weeksInMonth
    //   }
    // case SET_MONTHS_IN_YEAR:
    //   return {
    //     ...state,
    //     monthsInYear: action.monthsInYear
    //   }
    case SET_DAYS_IN_YEAR:
      return {
        ...state,
        daysInYear: action.daysInYear
      }
  
    default:
      return state;
  }

};
