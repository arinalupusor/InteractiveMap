import React, {useContext, useEffect, useState} from "react";
import Authcontext from "./AuthContext";
import {useNavigate} from "react-router-dom";
import { DatePicker, TimePicker } from 'antd';
import axios from "axios";
import config from "../config.json";

const UpcomingEvents = () => {
    const navigate = useNavigate ();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const {isAuthenticated, accountType, email, token} = useContext(Authcontext);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState("");

    const getUpcomingEvents = () => {
        axios.get(config.url + "/events/upcoming")
            .then(response => {
                console.log(response.data)
                setEvents(response.data)
            })
            .catch(response => {
                console.log("Failed to fetch from backend")
                console.log(response)
                setError(response.message)
            })
    };
    useEffect(() => {
        getUpcomingEvents();
    }, []);
    const handleDateChange = (date, dateString) => {
        setSelectedDate(date);
        console.log(date)
    };

    const handleTimeChange = (time, timeString) => {
        setSelectedTime(time);
        console.log(selectedDate)
        console.log(selectedTime)
        if(selectedDate && selectedTime)
        {
            axios.post(config.url + '/events', {
                name: "Some basic name",
                location: "Some basic location",
                description: "Some basic description",
                startTime: JSON.stringify(selectedDate),
                endTime: JSON.stringify(selectedTime)
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
    /*
    const events = [
        { id: 1, name: 'Moş Crăciun şi spiriduşii', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ended", description: 'Bucură+te de magia sărbătotilor alături de Moş Crăciun şi spiriduşii lui!Locul de joacă Neverland se transformă într-o lume de basm, plină de surprize și veselie. Participă la ateliere de creație, întâlnește spiridușii jucauși și primește cadouri minunate de la Moș Crăciun însuși. Un eveniment plin de bucurie și amintiri frumoase pentru toți copiii! Detalii despre ateliere și activități vor fi dezvăluite în curând.' },
        { id: 2, name: 'Moş Nicolae', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ongoing", description: 'Întâlnește-l pe Moș Nicolae într-o seară magică la locul de joacă Neverland! Participă la distracții speciale și surprize de sărbătoare. Moș Nicolae va aduce daruri pentru toți copiii cuminti și va împărți bucurie și zâmbete. Vino cu familia și prietenii tăi pentru a marca împreună această sărbătoare minunată! Detalii despre program și activități vor fi dezvăluite în curând.' },
        { id: 3, name: 'Halloween Party', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "due", description: 'Participă la o extraordinară petrecere de Halloween, unde atmosfera este plină de bucurie și surprize! Prin achitarea unei taxe de participare de 100 de lei, copilul dumneavoastră va avea parte de experiențe captivante, inclusiv pictură pe față, participare la parada de costume, implicare în jocuri și concursuri tematice. Servim pizza delicioasă, băuturi răcoritoare, precum și apă, oferind, de asemenea, un desert surpriză care va aduce un zâmbet pe fața fiecărui mic invitat, într-un mod amuzant și tematic. Alătură-te nouă pentru o petrecere de Halloween memorabilă și plină de distracție!' },
    ]; //TODO THIS EVENTS SHOULD COME FROM BACKEND, BUT IN DESCENDING ORDER
    */
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
                <div className="events-container">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} onClick={() => handleEventClick(event)}>
                            {event.name}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            {selectedEvent && (
                <div>
                    <p>Selected Event: {selectedEvent.name} </p>
                    <p>Location:{selectedEvent.location} </p>
                    <p>Interval:{selectedEvent.interval} </p>
                    <p>Date:{selectedEvent.date} </p>
                    <p>Description:{selectedEvent.description} </p>
                </div>
            )}
        </div>
    );
};
export default UpcomingEvents;