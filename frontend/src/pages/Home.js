import React, { useState } from "react";
import "../Pinn.css";
import Header from "../components/Header";

import LeafletMap from "../components/LeafletMap";
function MapContainer() {

  return (
    <div>
      <LeafletMap></LeafletMap>
    </div>
  );
}


const UpcomingEvents= ({upcomingEvents}) => {
  const [selectedEvent, setSelectedEvent]=useState(null);

  const handleEventClick=(event)=> {
    setSelectedEvent(event);
    //aici puteti adauga orice actiune suplimentara dorita in momentul apasarii unui eveniment
    console.log('event clicked: ${event}');
  };

  return(
    <div className="upcoming-events">
      <div className="events-box">
      <h2>Upcoming Events</h2>
      <div className="button-image-container"></div>
      <ul>
      {upcomingEvents.map((event, index) => (
        <li key={index} onclick={() =>handleEventClick(event)}>
          {event}
        </li>
         ))}
         </ul>
         </div>
         {selectedEvent &&(
          <div>
            {/*Aici pueti afisa informatii suplimentare despre evenimentul selectat*/}
            <p>Selected Event: {selectedEvent} </p>
            </div>
         )}
         </div>
         )
        }
 


const Home = () => {
  const upcomingEvents = [
    "Event 1",
    "Event 2",
    "Halloween Party",
    
  ];
 
  return (
    <div className="home-container">
      <Header />
      <MapContainer />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  );
};
 
export default Home;
  

 