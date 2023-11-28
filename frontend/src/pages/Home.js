import React, { useState, useContext } from "react";
import "./StyleSheets/Pinn.css";
import Authcontext from "../components/AuthContext";
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import UpcomingEvents from "../components/UpcomingEvents";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const { isAuthenticated, accountType, email, token } = useContext(Authcontext);


    return (
        <div className="home-container">
            <Header />
            <LeafletMap />
            <UpcomingEvents />

            <div className="button-container">
            <Link to="/create-event">
                <button className="create-event-button">Create Event</button>
                </Link>
                <Link to="/view-my-events">
                <button className="view-my-events-button">View My Events</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;

  

