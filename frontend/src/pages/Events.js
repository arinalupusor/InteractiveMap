import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import './StyleSheets/Event.css';
import Event from "../components/Event";
import Authcontext from "../components/AuthContext";
import axios from "axios";
import config from "../config.json";
import {FaTimes} from "react-icons/fa";

const Events = () => {
  let navigate = useNavigate();
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [signUpDropdown, setSignUpDropdown] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [selectedEventId, setSelectedEventId] = useState(null);
  const {isAuthenticated, setIsAuthenticated, accountType} = useContext(Authcontext);
  const {event_id} = useParams();

  const toggleGuestDropdown = () => {
    setGuestDropdown(!guestDropdown);
    setSignUpDropdown(false);
  };

  const toggleSignUpDropdown = () => {
    setSignUpDropdown(!signUpDropdown);
    setGuestDropdown(false);
    if(isAuthenticated)
    {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("accountType");
      setIsAuthenticated(false);
      navigate("/login")
    }
  };
  const getEventById = (id) => {
    return events.find((event) => event.id === id);
  };

  const getEvents = async () => {
    try {
      const response = await axios.get(config.url + '/events/upcoming');
      setEvents(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Failed to fetch from backend');
      console.log(error)
      setError(error.name);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getEvents();
    };
    fetchData()
  }, []);
  useEffect(() => {
    if(event_id && events.length > 0)
    {
      setSelectedEventId(getEventById(parseInt(event_id)));
    }
  }, [events, event_id]);
/*
  const events = [
    { id: 1, name: 'Moş Crăciun şi spiriduşii', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ended", description: 'Details for Events 1' },
    { id: 2, name: 'Moş Nicolae', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ongoing", description: 'Details for Events 2' },
    { id: 3, name: 'Halloween Party', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "due", description: 'Participă la o extraordinară petrecere de Halloween, unde atmosfera este plină de bucurie și surprize! Prin achitarea unei taxe de participare de 100 de lei, copilul dumneavoastră va avea parte de experiențe captivante, inclusiv pictură pe față, participare la parada de costume, implicare în jocuri și concursuri tematice. Servim pizza delicioasă, băuturi răcoritoare, precum și apă, oferind, de asemenea, un desert surpriză care va aduce un zâmbet pe fața fiecărui mic invitat, într-un mod amuzant și tematic. Alătură-te nouă pentru o petrecere de Halloween memorabilă și plină de distracție!' },
  ];
*/

  const handleEventClick = (event) => {
    setSelectedEventId((prevEvent) => (prevEvent === event ? null : event));
  };

  const selectedEvent =selectedEventId ? getEventById(selectedEventId.id) : null;

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <div className="header-container">
        <h1 className="title">
        <img className="kite" width="64" height="64" src="https://img.icons8.com/external-bzzricon-color-omission-bzzricon-studio/64/external-kite-spring-bzzricon-color-omission-bzzricon-color-omission-bzzricon-studio.png" alt="external-kite-spring-bzzricon-color-omission-bzzricon-color-omission-bzzricon-studio"/>
        <img
         className="cat-icon"
         width="64"
         height="64"
         src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/external-cat-animals-victoruler-linear-colour-victoruler.png"
         alt="external-cat-animals-victoruler-linear-colour-victoruler"
         />
        <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/cute-hamster.png"
            alt="cute-hamster"
          />
          Interactive Events</h1>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/color/48/strawberry.png" alt="strawberry"
            className="strawberry-icon"
            />
        <div className="header-buttons">
          <img className="user-icon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="user" />
          <div className="dropdown">
            <button
                className={`header-button ${guestDropdown ? 'active' : ''}`}
                onClick={toggleGuestDropdown}
            >
              {isAuthenticated ? accountType : "Guest"}
            </button>
            {guestDropdown && (
                <div className="dropdown-content">
                  <Link to="/login">Log in</Link>
                </div>
            )}
          </div>
          <div className="dropdown">
            <button
                className={`header-button signup ${signUpDropdown ? 'active' : ''}`}
                onClick={toggleSignUpDropdown}
            >{!isAuthenticated ? "Sign up" : "Logout" }
            </button>
            {!isAuthenticated && signUpDropdown && (
                <div className="dropdown-content">
                  <Link to="/register/USER">Sign up as user</Link>
                  <Link to="/register/EVENTOWNER">Sign up as event owner</Link>
                </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="event-list-container">
          <h2>Choose your event:</h2>
          <div className="event-list">
            {events.map((event) => (
              <div
                key={event.id}
                className="event-link"
                onClick={() => handleEventClick(event)}
              >
                {event.name}
              </div>
            ))}
          </div>
        </div>

        {selectedEvent ? (
          <Event selectedEvent={selectedEvent} setSelectedEventId={setSelectedEventId}></Event>
        ) : (
          <div className="intro-container">
          <h2>Welcome to Interactive Events!</h2>
          <p>
            Discover and participate in exciting events. Check out our diverse
            range of activities tailored for every interest.
          </p>
          <p>
            <strong>Why explore our events?</strong> Each event is crafted with
            care to provide a unique and memorable experience. Click on an event
            to learn more about its details and why you shouldn't miss it!
          </p>
          
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmitFeedback}>
            <label htmlFor="feedback">Your Feedback:</label>
            <img width="32" height="32" src="https://img.icons8.com/neon/96/filled-like.png" alt="heart" />
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      )}
    </div>
  </div>
          )}

export default Events;