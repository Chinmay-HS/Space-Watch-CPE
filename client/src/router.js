import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarJD from "./components/layout/navbar/navbar";
import Register from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Apod from "./components/apod/Apod";
import Map from "./components/Eonet";
import Profile from "./components/apod/profile";

import Home from "./Home";
function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavbarJD />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Apod" element={<Apod />} />
        <Route path="/Eonet" element={<Map />} />

        {loggedIn === false && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/Profile" element={<Profile />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
