import React, { createContext } from "react";
import { useReducer } from "react";

const proReducer=(state,{type,token})=>{
switch(type){
  case 'Login_success':{
    return {...state,isAuth:true,token:token}
  }
  case 'logout':
    {
      return {...state,isAuth:false,token:null}
    }
    default:
      return state
}

}


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initial={
    isAuth:false,
    token:null
  }
const [state,dispatch]=useReducer(proReducer,initial)



  return <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>;
};
