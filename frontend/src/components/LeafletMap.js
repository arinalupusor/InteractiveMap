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
    const handleMarkerClick = (message) => {
        console.log("You clicked");
        navigate('/pinPage');
    };
    const pins = [
        {
            id: 'purple-pin',
            icon: L.icon({
                iconUrl: image1,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.14395421490899, 27.582079811929617],
            message: 'You clicked on purple pin',
        },
        {
            
            id: 'red-pin',
            icon: L.icon({
                iconUrl: image2,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.16170746357623, 27.612238821160567],
            message:"OzPlay"
        },
        
        
            
        {
            id: 'green-pin',
            icon: L.icon({
                iconUrl: image3,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            }),
            position: [47.151885082487524, 27.581064364582836],
            message: 'You clicked on green pin',
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