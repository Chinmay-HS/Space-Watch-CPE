import React, { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Register from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Customers from "./components/customers/Customers";
import Apod from "./components/Apod";
import Map from "./components/Eonet";


function Router() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<div>Home</div>} />
                <Route path="/Apod" element={<Apod />} />
                <Route path="/Eonet" element={<Map />} />

                {
                    loggedIn === false && ( <>                
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    </>
                )}
                {
                    loggedIn === true && ( <>
                <Route path="/customer" element={<Customers />} />
                    </>
                    )}
            
            </Routes>
        </BrowserRouter>
    );
};

export default Router;