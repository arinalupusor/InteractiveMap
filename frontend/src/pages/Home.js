import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {Helmet} from "react-helmet";
import "../Pinn.css";
 
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";


 
const MapContainer = () => {
  const mapStyles = {
    height: "400px",
    width: "90%",
    position: "relative",
    top: "25px",
    left: "10px",
  };
 
  const defaultCenter = {
    lat: 47.1585,
    lng: 27.6014,
  };
 
  const locations = [
      {
        name: 'Marker 1',
        location: {
          lat: 47.151885082487524,
          lng: 27.581064364582836
        },
        icon: 'url_imaginesauculoare',
        id: 'marker1'
      }

    //   {
    //     name: 'Marker 2',
    //     location: {
    //       lat: 47.14395421490899,
    //       lng: 27.582079811929617,
    //     }, 
    //     icon: 'url_imaginesauculoare2',
    //     id: 'marker2',
    //   },
    //   {
    //     name: 'Marker 3',
    //     location: {
    //       lat: 47.16170746357623, 
    //       lng: 27.612238821160567,
    //     },
    //     icon: 'url_imaginesauculoare3',
    //     id: 'marker3',
    //   },
    //   // Adaugă mai multe obiecte pentru fiecare marker adițional
    ];
      



  return (
    <div>
      <Helmet>
    <LoadScript googleMapsApiKey="AIzaSyBlbdzY6NZd1trSEri0pV7pzgiy3Wkag6U">

    </LoadScript>
    </Helmet>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {locations.map((location, index) => (
        
<Marker
key={index}
position={location.location}
      label= 'Marker 1'
      icon={{
        url: image1,
        scaledSize: new window.google.maps.Size(30,40)
      }}
    />
  ))}


        </GoogleMap>

         

        </div>
  );
};
 
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
  

