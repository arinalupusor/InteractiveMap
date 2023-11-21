import React, { useState, useContext } from "react";
import "../Pinn.css";
import Authcontext from "../components/AuthContext";
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import UpcomingEvents from "../components/UpcomingEvents";


const Home = () => {
    const {isAuthenticated, accountType, email, token} = useContext(Authcontext);

    return (
        <div className="home-container">
            <Header />
            <LeafletMap />
            <UpcomingEvents />
        </div>
    );
};

export default Home;

  

