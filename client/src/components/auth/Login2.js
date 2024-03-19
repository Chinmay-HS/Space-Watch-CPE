import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login2() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        try{
            const loginData = {
                email,
                password,

            };

            await axios.post("http://localhost:3001/auth/login", loginData);
            await getLoggedIn();
            navigate("/");

        }catch (err) {
            console.error(err);
        }
    }
  
    return (
    <div>
        <h1> Log into your account </h1>
        <form onSubmit={login}>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <button type="submit">Log in</button>
        </form>
    </div>
  );   
}

export default Login2;