import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import {useNavigate} from 'react-router-dom';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const LeafletMap = () => {
    const iconUrl = {
      red: image2,
      green: image3,
      yellow: image1
    };
    const navigate = useNavigate ();
    const handleMarkerClick = (id) => {
        navigate('/pinPage/' + id);
    };
    const pins = [  // TODO THESE PINS SHOULD COME FROM BACKEND
        {
            id: '1',
            icon: "yellow",
            longitude: 47.14395421490899,
            latitude: 27.582079811929617,
            message: 'You clicked on purple pin',
        },
        {
            
            id: '2',
            icon: "red",
            longitude: 47.16170746357623,
            latitude: 27.612238821160567,
            message:"OzPlay"
        },
        {
            id: '3',
            icon: "green",
            longitude: 47.151885082487524,
            latitude: 27.581064364582836,
            message: 'You clicked on green pin',
        },
    ];
    const mapStyles = {
        height: "430px",
        width: "900px",
        position: "relative",
        top: "45px",
        left: "54px",
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
                    position={[pin.longitude, pin.latitude]}
                    icon={L.icon({
                        iconUrl: iconUrl[pin.icon],
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                    })}
                    eventHandlers={{
                        click: () => handleMarkerClick(pin.id),
                    }}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}
export default LeafletMap;