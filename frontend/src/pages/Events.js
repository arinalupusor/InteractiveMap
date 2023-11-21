import React, { useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import '../Event.css';
import Event from "../components/Event";

const Events = () => {
  const [loginDropdown, setLogInDropdown] = useState(false);
  const [signUpDropdown, setSignUpDropdown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [feedback, setFeedback] = useState('');
  const {event_id} = useParams(); // TODO this event_id is null if /event is accessed, however it will contain the event id if it has been accessed through Upcoming events, you have to select the event with this id after the fetch from backend.
  const toggleLogInDropdown = () => {
    setLogInDropdown(!loginDropdown);
    setSignUpDropdown(false);
  };

  const toggleSignUpDropdown = () => {
    setSignUpDropdown(!signUpDropdown);
    setLogInDropdown(false);
  };


  const events = [
    { id: 1, name: 'Event 1', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ended", description: 'Details for Events 1' },
    { id: 2, name: 'Event 2', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "ongoing", description: 'Details for Events 2' },
    { id: 3, name: 'Halloween Party', location: "Loc de joacă: Neverland", interval: "17:00-19:00", date: "Vineri, 27 Octombrie", status: "due", description: 'Participă la o extraordinară petrecere de Halloween, unde atmosfera este plină de bucurie și surprize! Prin achitarea unei taxe de participare de 100 de lei, copilul dumneavoastră va avea parte de experiențe captivante, inclusiv pictură pe față, participare la parada de costume, implicare în jocuri și concursuri tematice. Servim pizza delicioasă, băuturi răcoritoare, precum și apă, oferind, de asemenea, un desert surpriză care va aduce un zâmbet pe fața fiecărui mic invitat, într-un mod amuzant și tematic. Alătură-te nouă pentru o petrecere de Halloween memorabilă și plină de distracție!' },
  ]; //TODO THIS EVENT LIST SHOULD COME FROM BACKEND

  const handleEventClick = (event) => {
    setSelectedEvent((prevEvent) => (prevEvent && prevEvent.id === event.id ? null : event));
  };

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
        <div className="buttons">
          <img className="user-icon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="user" />
          <div className="dropdown">
            <button
              className={`button ${loginDropdown ? 'active' : ''}`}
              onClick={toggleLogInDropdown}
            >
              Log In
            </button>
            {loginDropdown && (
              <div className="dropdown-content">
                <Link to="/login">Log in as user</Link>
                <Link to="/login">Log in as event owner</Link>
                <Link to="/login">Log in as admin</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className={`button signup ${signUpDropdown ? 'active' : ''}`}
              onClick={toggleSignUpDropdown}
            >
              Sign up
            </button>
            {signUpDropdown && (
              <div className="dropdown-content">
                <Link to="/register">Sign up as user</Link>
                <Link to="/register">Sign up as event owner</Link>
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
          <Event selectedEvent={selectedEvent}></Event>
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