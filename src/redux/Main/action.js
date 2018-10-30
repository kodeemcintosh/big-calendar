import { SET_PAGE_TITLE, SET_CURRENT_DATE } from './types';

export function setPageTitle(action) {
  return {
    type: SET_PAGE_TITLE,
    pageTitle: action.pageTitle
  }
}

export function setCurrentDate(action) {
  return {
    type: SET_CURRENT_DATE,
    currentMonth: action.currentMonth
  }
}