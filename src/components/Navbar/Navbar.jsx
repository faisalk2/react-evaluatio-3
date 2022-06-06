import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from './navbar.module.css'
// use react-router Link or NavLink


const Navbar = () => {
const navigate=useNavigate();
  const {state,dispatch}=useContext(AuthContext);

  const handleLogout=()=>{
    if(state.isAuth)
    {
      dispatch(
        {type:"logout",
        token:null
      }
      )
    }else{
     navigate('/')
    }
  }


  return (
    <div data-cy="navbar" className={style.navbar}>
      <Link data-cy="navbar-home-link" to='/' >Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:-{0}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogout} >{state.isAuth ? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
