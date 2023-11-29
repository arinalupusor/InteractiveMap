import React, { useState } from "react";
import config from "../config.json";
import {useNavigate} from "react-router-dom";

const CreateEvent = () => {
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        name: "",
        location: "",
        description: "",
        startTime: "",
        endTime: "",
        longitude: null,
        latitude: null
    });
    function isEarlier(dateTime1, dateTime2) {
        const date1 = new Date(dateTime1); // Create Date object from dateTime1
        const date2 = new Date(dateTime2); // Create Date object from dateTime2

        // Compare the dates using comparison operators
        return date1 < date2; // Returns true if date1 is earlier than date2
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "endTime" && eventDetails.startTime !== "" && isEarlier(value, eventDetails.startTime))
        {
            setError("The event cannot end earlier than it starts!")
            return;
        }
        if (name === "startTime" && eventDetails.endTime !== "" && !isEarlier(value, eventDetails.startTime))
        {
            setError("The event cannot start later than it ends!")
            return;
        }
        setError(null);
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };
    const validateEventDetails = () => {
        console.log(parseFloat(eventDetails.longitude))
        if(eventDetails.endTime === "" || eventDetails.startTime === "" || eventDetails.description === "" ||
            eventDetails.name === "" || eventDetails.location === "" ||
            eventDetails.longitude === null || eventDetails.latitude === null)
        {
            setError("All the fields should be completed!")
            return false;
        }
        if (parseFloat(eventDetails.longitude) > 47.217230 || parseFloat(eventDetails.longitude) < 47.092853)
        {
            setError("Longitude cannot be away from Iasi!")
            return false;
        }
        if (parseFloat(eventDetails.latitude) < 27.484804 || parseFloat(eventDetails.latitude) > 27.713760)
        {
            setError("Latitude cannot be away from Iasi!")
            return false;
        }
        return true;
    };

    const handleCreateEvent = async () => {
        if(!validateEventDetails())
            return;
        try {
            console.log(JSON.stringify(eventDetails))
            const response = await fetch(config.url + '/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventDetails),
            });
            if(response.ok)
            {
                setError(null);
                navigate("/view-my-events");
            }
            else
            {
                setError(response.data.error);
            }
        }
        catch(error)
        {
            setError("Network error occured!");
        }
    };

    return (
        <div>
            <h2>Create Event</h2>
            <h3>Transform Your Ideas into Unforgettable Experiences: Start Your Event Journey Here!</h3>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={eventDetails.title} onChange={handleInputChange} />

                <label>Location:</label>
                <input type="text" name="location" value={eventDetails.location} onChange={handleInputChange} />

                <label>Description:</label>
                <input type="text" name="description" value={eventDetails.description} onChange={handleInputChange} />

                <label>Location longitude:</label>
                <input type="number" step="any"  name="longitude" value={eventDetails.longitude} onChange={handleInputChange} />

                <label>Location latitude:</label>
                <input type="number" step="any" name="latitude" value={eventDetails.latitude} onChange={handleInputChange} />

                <label>Date and time when event ends:</label>
                <input type="datetime-local" name="startTime" value={eventDetails.startTime} onChange={handleInputChange} />

                <label>Date and time when event ends:</label>
                <input type="datetime-local" name="endTime" value={eventDetails.endTime} onChange={handleInputChange} />
                {error && (
                    <label className={"errorLabel"}>{error}</label>
                )}
                <button type="button" onClick={handleCreateEvent}>Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;