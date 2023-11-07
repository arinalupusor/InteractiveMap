import React from "react";
import "../Pinn.css";

import LeafletMap from "../components/LeafletMap";
function MapContainer() {

  return (
    <div>
      <LeafletMap></LeafletMap>
    </div>
  );
}
 
const UpcomingEvents = ({ upcomingEvents }) => (
  <div className="upcoming-events">
    <div className="events-box">
      <h2>Upcoming Events</h2>
      <div className="button-image-container">
      </div>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  </div>
);


const Home = () => {
  const upcomingEvents = [
    "Event 1",
    "Event 2",
    "Event 3",
    "Event 4",
    "Event 5",
  ];
 
  return (
    <div className="home-container">
      <MapContainer />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  );
};
 
export default Home;
  

