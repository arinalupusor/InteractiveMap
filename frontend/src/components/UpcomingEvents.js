import React, {useContext, useState} from "react";
import Authcontext from "./AuthContext";
import {useNavigate} from "react-router-dom";

const UpcomingEvents = () => {
    const navigate = useNavigate ();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const {isAuthenticated, accountType, email, token} = useContext(Authcontext);


    const events = [
        { id: 1, name: 'Event 1', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ended", description: 'Details for Events 1' },
        { id: 2, name: 'Event 2', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ongoing", description: 'Details for Events 2' },
        { id: 3, name: 'Halloween Party', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "due", description: 'Participă la o extraordinară petrecere de Halloween, unde atmosfera este plină de bucurie și surprize! Prin achitarea unei taxe de participare de 100 de lei, copilul dumneavoastră va avea parte de experiențe captivante, inclusiv pictură pe față, participare la parada de costume, implicare în jocuri și concursuri tematice. Servim pizza delicioasă, băuturi răcoritoare, precum și apă, oferind, de asemenea, un desert surpriză care va aduce un zâmbet pe fața fiecărui mic invitat, într-un mod amuzant și tematic. Alătură-te nouă pentru o petrecere de Halloween memorabilă și plină de distracție!' },
    ]; //TODO THIS EVENTS SHOULD COME FROM BACKEND, BUT IN DESCENDING ORDER

    const handleEventClick = (clickedEvent) => {
        setSelectedEvent(clickedEvent);
        navigate("/event/" + clickedEvent.id);
    };

    return (
        <div className="upcoming-events">
            <div className="events-box">
                <h2>Upcoming Events</h2>
                <div className="button-image-container">
                </div>
                <ul>
                    {events.map((event, index) => (
                        <li key={index} onClick={() => handleEventClick(event)}>
                            {event.name}
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
export default UpcomingEvents;