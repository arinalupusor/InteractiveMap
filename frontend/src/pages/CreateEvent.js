import React, { useState } from "react";

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({
        // Starea pentru a gestiona detalii eveniment
        title: "",
        date: "",
        location: "",
        // ... alte detalii ale evenimentului
    });

    const handleInputChange = (e) => {
        // Actualizează starea pe baza input-urilor
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
                <label>Title:</label>
                <input type="text" name="title" value={eventDetails.title} onChange={handleInputChange} />

                <label>Date:</label>
                <input type="date" name="date" value={eventDetails.date} onChange={handleInputChange} />

                <label>Location:</label>
                <input type="text" name="location" value={eventDetails.location} onChange={handleInputChange} />

                {/* Alte câmpuri pentru detalii ale evenimentului */}

                <button type="button" onClick={handleCreateEvent}>Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;