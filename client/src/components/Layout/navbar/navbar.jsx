import { useState } from 'react';
import './navbar.css'
import MenuLogo from './../../../assets/images/more.png';
import team_logo from './../../../assets/images/pixellabs_white 1.png';



function Navbar() {
  const [toggle,setToggle] = useState(false);

  return (
    <div>
      {/*<div className="logo"> <img src={team_logo} alt="" /></div>*/} 
      <div className="navbar">
        <ul className="links">
          <li><a href='/'>Modules</a></li>
          <li><a href='/'>Use Cases</a></li>
          <li><a href='?'>Login</a></li>
          <li><a href='?'>About Us</a></li>
        </ul>
      </div>
      <button id="btn" className={`toggleButton ${toggle?"open":""}`} onClick={() => { toggle ? setToggle(false) : setToggle(true) }} ><img src={MenuLogo} alt="" /></button>
      <div id="dropdown_menu" className={`dropdown_menu ${toggle?"open":""}`}>
          <li><a href='/'>Modules</a></li>
          <li><a href='/'>Use Cases</a></li>
          <li><a href='?'>Login</a></li>
          <li><a href='?'>About Us</a></li>
      </div>
    </div>
  );
}

{/*const toggleButton = document.querySelector('#btn');
const menu =  document.querySelector('.dropdown_menu');

toggleButton.onClick = function (){
  menu.classList.toggle('open')
}*/}
const button = document.getElementById('#btn')
const menu =  document.getElementById('#dropdown_menu');
const showMenu = () => {
  menu.classList.toggle('open');
  button.classList.toggle('open');

}

export default Navbar;