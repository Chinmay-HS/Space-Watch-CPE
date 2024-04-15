import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../layout/navbar/navbar.css';

function LogOutBtn() {

const {getLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

   async function LogOut(){
    await axios.get("http://localhost:3001/auth/logout");
    await getLoggedIn();
    
    navigate("/");

    }
  return <button className='logout' onClick={LogOut}>Log Out</button>
  
};

export default LogOutBtn;

