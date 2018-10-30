import initialState from "../initialState";
import { LOGIN, REGISTER } from "./types";


export function authentication(state = initialState.authentication, action) {

  switch(action.type) {

     case LOGIN:
       return {
         ...state,
         user: action.user
       }
   
     case REGISTER:
       return {
         ...state,
         user: action.user,
         firstName: action.firstName,
         lastName: action.lastName,
         email: action.email,
         address: action.address
       }

     default:
       return state;
   }

};
