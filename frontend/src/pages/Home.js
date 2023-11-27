import React, { useState, useContext } from "react";
import "../Pinn.css";
import Authcontext from "../components/AuthContext";
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MapContainer() {
    return (
        <div>
            <LeafletMap></LeafletMap>
        </div>
    );
}

const UpcomingEvents = ({ upcomingEvents }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const {isAuthenticated, accountType, email, token} = useContext(Authcontext);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        console.log('event clicked: ${event}');
    };

    return (
        <div className="upcoming-events">
            <div className="events-box">
                <h2>Upcoming Events</h2>
                <div className="button-image-container">
                </div>
                <ul>
                    {upcomingEvents.map((event, index) => (
                        <li key={index} onClick={() => handleEventClick(event)}>
                            {event}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedEvent && (
                <div>
                    <p>Selected Event: {selectedEvent} </p>
                </div>
            )}
        </div>
    );
};

const Home = () => {
    const {isAuthenticated, accountType, email, token} = useContext(Authcontext);
    const upcomingEvents = [
        "Event 1",
        "Event 2",
        "Event 3",
        "Event 4",
        "Event 5",
    ];

    return (
        <div className="home-container">
            <Header />
            <MapContainer />
            <UpcomingEvents upcomingEvents={upcomingEvents} />
            <Footer/>
        </div>
    );
};

export default Home;

  

