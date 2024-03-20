import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn);
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/Apod">APOD</Link>
        <Link to="/Eonet">EONET</Link>
        { loggedIn === false && (
            <>
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Log in</Link>
            </>
        )}
        {loggedIn === true &&  (
            <>
            <Link to="/customer">Customers</Link> 
            <Link to="/profile">Profile</Link>
            <LogOutBtn />
            </>
        )}    
        </div>
    );
}

export default Navbar;