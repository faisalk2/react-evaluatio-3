import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const navigate=useNavigate();
const {state}=useContext(AuthContext);
if(state.isAuth){
 
  return children;
}
  else{
    // return <Navigate to='/home'/>
    return  navigate('/home');
  }
};

export default RequiredAuth;
