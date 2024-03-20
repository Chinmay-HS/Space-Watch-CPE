import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogOutBtn() {

const {getLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

   async function LogOut(){
    await axios.get("http://localhost:3001/auth/logout");
    await getLoggedIn();
    
    navigate("/");

    }
  return <button onClick={LogOut}>LogOut</button>
  
};

export default  LogOutBtn;

