import initialState from "../initialState";
import { LOGIN, REGISTER } from "./types";


function authentication(state = initialState.day, action) {

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

export default authentication;