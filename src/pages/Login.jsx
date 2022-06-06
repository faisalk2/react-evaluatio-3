import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState("");
  const {state,dispatch}=useContext(AuthContext);
const navigate=useNavigate();
  
const handleSubmit=()=>{
  axios({url:'https://reqres.in/api/login',
  method:"Post",
  data:{email,password}
}).then(res=>{
  alert("Login successfull")
  dispatch(
    {
      type:"Login_success",
      token:res.data.token
    }
    );
   if(state.isAuth)
   {
     navigate('/home');
   }

  }).catch(err=>console.log(err));
}
  

  return (
    <div>
      <input data-cy="login-email" placeholder="enter email" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <input data-cy="login-password" placeholder="enter password" type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <button data-cy="login-submit" onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
