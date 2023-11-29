import React, {useContext, useEffect, useMemo, useState} from "react";
import StarRating from "./StarRating";
import { FaTimes } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import Authcontext from "./AuthContext";
const Event = ({selectedEvent, setSelectedEventId}) => {
    const {isAuthenticated, setIsAuthenticated, accountType} = useContext(Authcontext);
    const statusObject = {
        statusMessage : {
            ended: "This event has ended!",
            ongoing: "This event is ongoing!",
            due: "This event will happen soon!"
        },
        statusIcon : {
            ended: "https://img.icons8.com/color/48/close-window.png",
            ongoing: "https://icons8.com/icon/115646/process",
            due: "https://img.icons8.com/emoji/48/check-mark-emoji.png"
        },
        statusClassName : {
            ended: "event-ended-message",
            ongoing: "event-ongoing-message",
            due: "event-due-message"
        }
    }
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [rating, setRating] = useState(0);
    let navigate = useNavigate();
    const eventIntervals = useMemo(() => [
            'https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/228396ce-ac5e-48a3-7cca-af5d27145e00/source',
            'https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/6f56c511-01d6-4760-4b36-15ad9e733000/source',
            'https://maurycountysource.com/wp-content/uploads/2023/09/halloween-stock-photo.jpg',
        ]

    , []);
    useEffect(() => {
        if (selectedEvent && eventIntervals) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventIntervals.length);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [selectedEvent, eventIntervals]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        console.log("entered")
        if(!isAuthenticated)
        {
            navigate("/login")
            return;
        }
        if (newComment.trim() !== '') {
            const updatedComments = [
                ...comments,
                {
                    id: comments.length + 1, // Use the length of the comments array as a simple ID
                    user: 'Current User', // Replace with actual user info
                    text: newComment,
                    likes: 0,
                },
            ];

            setComments(updatedComments);
            setNewComment('');
        }
    };

    const handleLikeComment = (commentId) => {
        const updatedComments = comments.map((comment) =>
            comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
    };
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const onLocationClicked = () => {
        navigate("/home/" + selectedEvent.pinId)
    }

    return (
       <div className="event-details-container">
           <button className="close-button" onClick={() => setSelectedEventId(null)}>
               <FaTimes />
           </button>
           <h2>{selectedEvent.name}</h2>
           <div className="image-interval">
               <img src={eventIntervals[currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
               <div className="star-rating-container">
                   <p>Rate this event:</p>
                   <StarRating rating={rating} onRatingChange={handleRatingChange} />
               </div>
               <div className="icons-container">
                   <img width="40" height="40" src="https://img.icons8.com/clouds/100/calendar--v2.png" alt="calendar--v2" /> <span className='icon-text'>{selectedEvent.date}</span>
               </div>
               <div className="icons-container1">
                   <img width="40" height="40" src="https://img.icons8.com/clouds/100/timer.png" alt="timer"/> <span className='icon-text'> Orele {selectedEvent.interval}</span>
               </div>
               <div className="icons-container2">
                   <img width="40" height="40" src="https://img.icons8.com/clouds/100/map-pin.png" alt="map-pin" onClick={onLocationClicked}/> <span className='icon-text' onClick={onLocationClicked}>{selectedEvent.location}</span>
               </div>
               <div className={statusObject.statusClassName[selectedEvent.status]}>
                   <img width="20" height="20" src={statusObject.statusIcon[selectedEvent.status]} alt="close-window"/> <span className='icon-text'>{statusObject.statusMessage[selectedEvent.status]}</span>
               </div>
               <div className="description-box">
                   <p>{selectedEvent.description}</p>
               </div>
           </div>
           <div className="comment-section">
               <h3>Comments</h3>
               <textarea
                   placeholder="Write a comment..."
                   value={newComment}
                   onChange={handleCommentChange}
               />
               <button onClick={handleCommentSubmit} disabled={!newComment.trim()}>
                   Comment
               </button>
               <div className="comments">
                   {comments.map((comment) => (
                       <div key={comment.id} className="comment">
                           <img
                               width="48"
                               height="48"
                               src="https://img.icons8.com/pulsar-color/48/guest-male.png"
                               alt="guest-male"
                           />
                           {comment.user}: {comment.text} - Likes: {comment.likes}
                           <button onClick={() => handleLikeComment(comment.id)}>Like</button>
                       </div>
                   ))}
               </div>
           </div>
       </div>
    );
};

export default Event;