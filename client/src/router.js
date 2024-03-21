import React, { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarJD from "./components/layout/navbar/navbar";
import Register from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Apod from "./components/apod/Apod";
import Profile from "./components/apod/profile";
import Home from "./Home";
import MainPage from "./components/eonet/EonetMain";
import WildFirePage from "./components/eonet/WildFirePage";
import IcePage from "./components/eonet/IcePage";
import VolcanoesPage from "./components/eonet/VolcanoesPage";

function Router() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
        <NavbarJD />

            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Apod" element={<Apod />} />
                <Route path="/EonetMain" element={<MainPage />} />
                <Route path="/WildFirePage" element={<WildFirePage />} />
                <Route path="/IcePage" element={<IcePage />} />
                <Route path="/VolcanoesPage" element={<VolcanoesPage />} />

                {
                    loggedIn === false && ( <>                
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    </>
                )}
                {
                    loggedIn === true && ( <>
                <Route path="/Profile" element={<Profile />} />
                    </>
                    )}
            
            </Routes>
        </BrowserRouter>
    );
};

export default Router;