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
        <div>
            <div className="home-container">
                <Header />
                <LeafletMap />
                <UpcomingEvents />

                <div className="button-container">
                    {isAuthenticated && accountType === "EVENTOWNER" ? (<Link to="/create-event">
                    <button className="create-event-button">Create Event</button>
                    </Link>): null}
                    {isAuthenticated && accountType === "EVENTOWNER" ? (<Link to="/view-my-events">
                    <button className="view-my-events-button">View My Events</button>
                    </Link>): null}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;

  

