import {
  //  SET_DAYS_IN_WEEK, SET_CURRENT_WEEK_IN_MONTH, SET_WEEKS_IN_MONTH, SET_DAYS_IN_MONTH, SET_MONTHS_IN_YEAR,
   SET_DAYS_IN_YEAR } from './types';

// export function setDaysInWeek(action) {
//   return {
//     type: SET_DAYS_IN_WEEK,
//     daysInWeek: action.daysInWeek
//   }
// }

// export function setCurrentWeekInMonth(action) {
//   return {
//     type: SET_CURRENT_WEEK_IN_MONTH,
//     currentWeekInMonth: action.currentWeekInMonth
//   }
// }

// export function setDaysInMonth(action) {
//   return {
//     type: SET_DAYS_IN_MONTH,
//     daysInMonth: action.daysInMonth
//   }
// }

// export function setWeeksInMonth(action) {
//   return {
//     type: SET_WEEKS_IN_MONTH,
//     weeksInMonth: action.weeksInMonth
//   }
// }

// export function setMonthsInYear(action) {
//   return {
//     type: SET_MONTHS_IN_YEAR,
//     monthsInYear: action.monthsInYear
//   }
// }

export function setDaysInYear(action) {
  return {
    type: SET_DAYS_IN_YEAR,
    daysInYear: action.daysInYear
  }
}