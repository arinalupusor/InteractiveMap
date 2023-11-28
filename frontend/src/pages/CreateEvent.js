import React, { useState } from "react";

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({
        name: "",
        location: "",
        description: "",
        startTime: "",
        endTime: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleCreateEvent = () => {
        // Implementează logica pentru a crea evenimentul
        console.log("Create event button clicked", eventDetails);
        // Poți trimite detalii către API pentru a salva evenimentul
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

                <label>Start Time:</label>
                <input type="time" name="startTime" value={eventDetails.startTime} onChange={handleInputChange} />

                <label>End Time:</label>
                <input type="time" name="endTime" value={eventDetails.endTime} onChange={handleInputChange} />

                <button type="button" onClick={handleCreateEvent}>Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;