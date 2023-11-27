import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import L, { divIcon } from "leaflet";
import { Link , useNavigate} from 'react-router-dom';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const LeafletMap = () => {
    const navigate = useNavigate ();
    const handleMarkerClick = (eventId) => {
        console.log(`You clicked on event ${eventId}`);
        navigate(`/event/${eventId}`); 
    };
    const pins = [
        {
            id: 'purple-pin',
            icon: L.icon({
                iconUrl: image1,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.14897560927193, 27.621073252411787],
            message: 'Kids-Mania',
        },
        {
            
            id: 'red-pin',
            icon: L.icon({
                iconUrl: image2,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.1539306289, 27.5695681572],
            message:"Trilulici Club"
        },
        
        
            
        {
            id: 'green-pin',
            icon: L.icon({
                iconUrl: image3,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.13398385145664, 27.57130849693622],
            message: 'Neverland',
        },
    ];
    const mapStyles = {
        height: "500px",
        width: "900px",
        position: "relative",
        top: "25px",
        left: "10px",
    };
    const mapPosition = [47.1585, 27.6014]; // Initial coordinates
    return (
        <MapContainer center={mapPosition} zoom={13} style={mapStyles}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pins.map((pin) => (
                <Marker
                    key={pin.id}
                    position={pin.position}
                    icon={pin.icon}
                    eventHandlers={{
                        click: () => handleMarkerClick(pin.message),
                    }}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}
export default LeafletMap;