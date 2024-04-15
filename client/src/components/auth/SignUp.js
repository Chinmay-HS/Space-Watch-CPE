import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:3001/auth/", registerData);
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-img-signup">
      <div className="form">
        <h1> sign Up
          <p className="main-line">
            If you already have an account registered
            <p>
              You can <a className='register-link' href='/login'>Login here ! </a> 
            </p>
          </p>
        </h1>
        <form onSubmit={register}>
          <div className="input-field">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}value={email}/>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Verify your password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
          </div>
          <div className="input-field">
            <button className='login-btn' type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
