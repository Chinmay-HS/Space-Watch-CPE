import React, { useState, useContext } from "react";
import "./navbar.css";
import MenuLogo from "./../../../assets/images/more.png";
import team_logo from "./../../../assets/images/pixellabs_white 1.png";

import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import LogOutBtn from "../../auth/LogOutBtn";

function NavbarJD() {
  const [toggle, setToggle] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div>
      {/*<div className="logo"> <img src={team_logo} alt="" /></div>*/}
      <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Apod">APOD</Link>
          <Link to="/Eonet">EONET</Link>
          {loggedIn === false && (
            <>
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Log in</Link>

            </>
          )}
          {loggedIn === true && (
            <>
            <Link to="/profile">Profile</Link>
            <LogOutBtn />
            </>
          )}
        </div>
      </div>
      <button
        id="btn"
        className={`toggleButton ${toggle ? "open" : ""}`}
        onClick={() => {
          toggle ? setToggle(false) : setToggle(true);
        }}
      >
        <img src={MenuLogo} alt="" />
      </button>
      <div
        id="dropdown_menu"
        className={`dropdown_menu ${toggle ? "open" : ""}`}
      >
        <div>
          <Link to="/">Home</Link>
          <Link to="/Apod">APOD</Link>
          <Link to="/Eonet">EONET</Link>
          {loggedIn === false && (
            <>
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Log in</Link>
            </>
          )}
          {loggedIn === true && (
            <>
              <Link to="/customer">Customers</Link>
              <Link to="/profile">Profile</Link>
              <LogOutBtn />
            </>
          )}
        </div>
      </div>
    </div>
  );
}


  /*const toggleButton = document.querySelector('#btn');
const menu =  document.querySelector('.dropdown_menu');

toggleButton.onClick = function (){
  menu.classList.toggle('open')
}*/


const button = document.getElementById("#btn");
const menu = document.getElementById("#dropdown_menu");
const showMenu = () => {
  menu.classList.toggle("open");
  button.classList.toggle("open");
};

export default NavbarJD;
