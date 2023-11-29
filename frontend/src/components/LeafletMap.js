import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import {useNavigate, useParams} from 'react-router-dom';
import image1 from "../images/image1.png";
import image3 from "../images/image3.png";
import axios from "axios";
import config from "../config.json";
import {useEffect, useState} from "react";

const LeafletMap = () => {
    const navigate = useNavigate ();
    const [pins, setPins] = useState([]);
    const [mapPosition, setMapPosition] = useState([47.1585, 27.6014]);
    const [error, setError] = useState(null);
    const {pin_id} = useParams();
    const [map, setMap] = useState(null)
    const zoomLevel = 13;
    const handleMarkerClick = (pin) => {
        console.log(pin)
        if(pin.place)
            navigate('/pinPage/' + pin.id)
        else
        {
            axios.get(config.url + "/events/upcoming")
                .then(response => {
                    console.log(response.data)
                    response.data.forEach(place => {
                        if(place.pinId === pin.id)
                            navigate("/event/" + place.id)
                    })
                })
                .catch(response => {
                    console.log("Failed to fetch from backend")
                    console.log(response)
                    setError(response.message)
                })
        }
    };
    const computeMapPosition = () => {
        if(pin_id === null)
            return
        pins.forEach(pin => {
            if (pin.id === parseInt(pin_id)) {
                setMapPosition([pin.longitude, pin.latitude]);
                console.log("Computed!")

            }
        });
    };
    const getPins = () =>
    {
        axios.get(config.url + '/pins')
            .then(response => {
                setPins(response.data)
            })
            .catch(error => {
                console.log(error)
                setError("Network error!")
            });
    };
    useEffect(() => {
        getPins();
    }, []);

    useEffect(() => {
        computeMapPosition();
    }, [pins]);

    useEffect(() => {
        if(map)
        {
            map.setView(mapPosition, zoomLevel)
        }
    }, [mapPosition]);


    const getIcon = (isPlace) => {
        return isPlace ? image3 : image1;
    };
    /*
    const pins = [
        {
            id: '1',
            place: false,
            longitude: 47.14395421490899,
            latitude: 27.582079811929617,
            message: 'You clicked on purple pin',
        },
        {
            
            id: '2',
            place: green,
            longitude: 47.16170746357623,
            latitude: 27.612238821160567,
            message:"OzPlay"
        },
        {
            id: '3',
            place: false,
            longitude: 47.151885082487524,
            latitude: 27.581064364582836,
            message: 'You clicked on green pin',
        },
    ];
     */
    const mapStyles = {
        height: "430px",
        width: "900px",
        position: "relative",
        top: "45px",
        left: "54px",
    };
    return (
        <MapContainer center={mapPosition} zoom={zoomLevel} style={mapStyles} ref={setMap}>
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pins.map((pin) => (
                <Marker
                    key={pin.id}
                    position={[pin.longitude, pin.latitude]}
                    icon={L.icon({
                        iconUrl: getIcon(pin.place),
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                    })}
                    eventHandlers={{
                        click: () => handleMarkerClick(pin),
                    }}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}
export default LeafletMap;