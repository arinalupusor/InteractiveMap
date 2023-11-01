import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapContainer = () => {
    const mapStyles = {
      height: "400px",
      width:"90%",
      position:"relative",
      top:"25px",
      left:"10px",

    };
  
  
    const defaultCenter = {
      lat: 47.1585,
      lng: 27.6014
    };
  
    const locations = [
      {
        name: "Playground",
        location: {
          lat: 40.712776,
          lng: -74.005974
        },
        type: "playground"
      },
      {
        name: "Current Event",
        location: {
          lat: 40.73061,
          lng: -73.935242
        },
        type:"current"
      },
      {
        name:"Future event",
        location: {
            lat: 40.75,
            lng: -74.2
          },
          type:"future"
      }
    ];
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyBlbdzY6NZd1trSEri0pV7pzgiy3Wkag6U">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
         {locations.map((item, index) => {
          let pinColor = "purple"; 

          if (item.type === "playground") {
            pinColor = "green"; 
          } else if (item.type === "current") {
            pinColor = "orange"; 
          } else if (item.type === "future") {
            pinColor = "purple"; 
          }
            return (
              <Marker
                key={index}
                position={item.location}
                label={item.name}
                icon={{
                    url: `https://maps.google.com/mapfiles/ms/icons/${pinColor}-dot.png`, // Adaugă culoarea specificată la URL-ul icoanei pinului
                  }}
              />
            );
          })}
          </GoogleMap>
          </LoadScript>
    );
  };
  const UpcomingEvents = ({ upcomingEvents }) => (
    <div className="upcoming-events">
        <div className="events-box">
            <h2>Upcoming Events</h2>
            <button className="add-event-button">Add Event</button>
            <ul>
                {upcomingEvents.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
        <div className="image-container">
        <img
            className="hot-air-balloon-icon"
            src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-air-transportation-vol2-microdots-premium-microdot-graphic.png"
            alt="external-air-transportation-vol2-microdots-premium-microdot-graphic"
        />
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
    
  )
};

export default Home;