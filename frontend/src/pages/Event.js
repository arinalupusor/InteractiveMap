import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../Event.css';

const Event = () => {
  const [loginDropdown, setLogInDropdown] = useState(false);
  const [signUpDropdown, setSignUpDropdown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rating, setRating] = useState(0);
  
  const handleLocationClick = (coordinates) => {
   
    console.log(`Clicked on location with coordinates: ${coordinates}`);
   
    window.open(`/map?lat=${coordinates[0]}&lng=${coordinates[1]}`, '_blank');
  };
  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const toggleLogInDropdown = () => {
    setLogInDropdown(!loginDropdown);
    setSignUpDropdown(false);
  };

  const toggleSignUpDropdown = () => {
    setSignUpDropdown(!signUpDropdown);
    setLogInDropdown(false);
  };

  const events = [
    { id: 1, name: 'Moș Crăciun și Spiridușii', details: '', location: 'Kids-Mania', coordinates: [47.14897560927193, 27.621073252411787] },
    { id: 2, name: 'Moș Nicolae', details: '', location: 'Trilulici Club', coordinates: [47.1539306289, 27.5695681572] },
    { id: 3, name: 'Halloween Party', details: '', location: 'Neverland', coordinates: [47.13398385145664, 27.57130849693622] },
  ];
  
  const eventIntervals = useMemo(() => ({
    3: [
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/396537253_826069052856979_4658068107682521338_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YbgbHQ9k9JQAX9bf4cc&_nc_ht=scontent.fclj1-2.fna&oh=00_AfBTJt9j3_vADVytslD6pS9HDujacR2F7XulhrF_9kzCEw&oe=6557FC10',
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/394918836_821892419941309_1166596374119914519_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GDGSi38VrnAAX_-77Wz&_nc_ht=scontent.fclj1-2.fna&oh=00_AfCz-R78PmvpT3ar607MlUoCvQV5mEhfL-vztC44I-N_Kg&oe=6556F66A',
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/324100508_3502684713348974_4646989976844372542_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9gyUKETaDs4AX-lomq6&_nc_ht=scontent.fclj1-2.fna&oh=00_AfD_z37eO5vC27SnLC5iS63iSjPfKDhMrh6PiaMo13z_qQ&oe=6556A300',
    ],

    1: [
      'https://kids-mania.info/wp-content/uploads/2022/11/ALX09815-2-1024x701.jpeg',
      'https://kids-mania.info/wp-content/uploads/2022/11/ALX09779-1024x725.jpg',
      'https://kids-mania.info/wp-content/uploads/2022/11/ALX09854-2-scaled.jpeg',
    ],

    2: [
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/318305604_204912188761954_3629334351152673668_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hgGkH-o_NGUAX_vX6Df&_nc_ht=scontent.fclj1-2.fna&oh=00_AfBlL8-jN7tlgzplnb-n2K-zD8Von6-yNThedkBTH_c3qQ&oe=6565E9E4',
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/318345909_204912228761950_89268410360043696_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GwU9SdINvVwAX9W7WTc&_nc_ht=scontent.fclj1-2.fna&oh=00_AfCMUP_OepeRGWcZ9Mogtx2RdSrHa454duaS01S-Zk6c8g&oe=65650CC2',
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/318348192_204912245428615_5901856687922461785_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=43LVDZmHdVYAX_CUl7M&_nc_ht=scontent.fclj1-2.fna&oh=00_AfAC1ChAOjc9UhC-9PQAI6TQWmzQ--Yt4mfe3w7p7iYsSA&oe=65665A81',
    ]
    
  }), []);
  
  const handleEventClick = (event) => {
    setSelectedEvent((prevEvent) => (prevEvent && prevEvent.id === event.id ? null : event));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  useEffect(() => {
    if (selectedEvent && eventIntervals[selectedEvent.id]) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventIntervals[selectedEvent.id].length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }
  }, [selectedEvent, eventIntervals]);
  const StarRating = ({ rating, onRatingChange }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
      <div className="star-rating">
        {stars.map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star filled' : 'star'}
            onClick={() => onRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  const initialComments = [
    { id: 1, user: 'User1', text: 'This event looks amazing!', likes: 5 },
    { id: 2, user: 'User2', text: 'Can\'t wait to join!', likes: 3 },
    { id: 3, user: 'User3', text: 'I attended last year, it was fantastic!', likes: 8 },
  ];
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [
        ...comments,
        {
          id: comments.length + 1, 
          user: 'Current User', 
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


  return (
    <div className='event-page-container'>
      <div className="header-container">
        <h1 className="title">
        <img className="kite" width="64" height="64" src="https://img.icons8.com/external-bzzricon-color-omission-bzzricon-studio/64/external-kite-spring-bzzricon-color-omission-bzzricon-color-omission-bzzricon-studio.png" alt="external-kite-spring-bzzricon-color-omission-bzzricon-color-omission-bzzricon-studio"/>
        <img
         className="cat-icon"
         width="64"
         height="64"
         src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/external-cat-animals-victoruler-linear-colour-victoruler.png"
         alt="external-cat-animals-victoruler-linear-colour-victoruler"
         />
        <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/cute-hamster.png"
            alt="cute-hamster"
          />
          Interactive Events</h1>
          <div className='strawberry'>
          <img width="30" height="30" src="https://img.icons8.com/color/48/strawberry.png" alt="strawberry"/></div>
        <div className="buttons">
          <img className="user-icon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="user" />
          <div className="dropdown">
            <button
              className={`button ${loginDropdown ? 'active' : ''}`}
              onClick={toggleLogInDropdown}
            >
              Log In
            </button>
            {loginDropdown && (
              <div className="dropdown-content">
                <Link to="/login">Log in as user</Link>
                <Link to="/login">Log in as event owner</Link>
                <Link to="/login">Log in as admin</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className={`button signup ${signUpDropdown ? 'active' : ''}`}
              onClick={toggleSignUpDropdown}
            >
              Sign up
            </button>
            {signUpDropdown && (
              <div className="dropdown-content">
                <Link to="/register">Sign up as user</Link>
                <Link to="/register">Sign up as event owner</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="event-list-container">
          <h2>Choose your event:</h2>
          <div className="event-list">
            {events.map((event) => (
              <div
                key={event.id}
                className="event-link"
                onClick={() => handleEventClick(event)}
              >
                {event.name}
              </div>
            ))}
          </div>
        </div>

        {selectedEvent ? (
        <div className="event-details-container">
           <button className="close-button" onClick={() => setSelectedEvent(null)}>
      <FaTimes /> 
    </button>
          <h2> {selectedEvent.name} </h2>
          <p>{selectedEvent.details}</p>
          
          {selectedEvent.id === 3 && (
              <div className="image-interval">
                <img src={eventIntervals[3][currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
                <div className="star-rating-container">
              <p>Rate this event:</p>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
            </div>
            <div className="icons-container">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/calendar--v2.png" alt="calendar--v2" /> <span className='icon-text'> Vineri, 27 Octombrie </span>
           </div>
           <div className="icons-container1">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/timer.png" alt="timer"/> <span className='icon-text'> Orele 17:00-19:00</span>
           </div>
           <div className="icons-container2" onClick={() => handleLocationClick([47.13398385145664, 27.57130849693622], 'Neverland')}>
              <img width="40" height="40" src="https://img.icons8.com/clouds/100/map-pin.png" alt="map-pin" />
              <span className='icon-text'> Loc de joacă: Neverland</span>
            </div>
           <div className="event-ended-message">
           <img width="20" height="20" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/> <span className='icon-text'>This event has ended.</span>
           </div>
           <div className="description-box">
            <p>Participă la o extraordinară petrecere de Halloween, unde atmosfera este plină de bucurie și surprize! Prin achitarea unei taxe de participare de 100 de lei, copilul dumneavoastră va avea parte de experiențe captivante, inclusiv pictură pe față, participare la parada de costume, implicare în jocuri și concursuri tematice. Servim pizza delicioasă, băuturi răcoritoare, precum și apă, oferind, de asemenea, un desert surpriză care va aduce un zâmbet pe fața fiecărui mic invitat, într-un mod amuzant și tematic. Alătură-te nouă pentru o petrecere de Halloween memorabilă și plină de distracție!</p>
            </div>
              </div>
              
          )}
          {selectedEvent.id === 1 && (
              <div className="image-interval">
                <img src={eventIntervals[1][currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
                <div className="star-rating-container">
              <p>Rate this event:</p>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
            </div>
            <div className="icons-container">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/calendar--v2.png" alt="calendar--v2" /> <span className='icon-text'> Duminică, 24 Decembrie </span>
           </div>
           <div className="icons-container1">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/timer.png" alt="timer"/> <span className='icon-text'> Orele 19:00-23:00</span>
           </div>
           <div className="icons-container2" onClick={() => handleLocationClick([47.14897560927193, 27.621073252411787], 'Kids-Mania')}>
              <img width="40" height="40" src="https://img.icons8.com/clouds/100/map-pin.png" alt="map-pin" />
              <span className='icon-text'> Loc de joacă: Kids-Mania</span>
            </div>
           <div className="event-message">
           <img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-emoji.png" alt="check-mark-emoji"/> <span className='icon-text'>Upcoming Event.</span>
           </div>
           <div className="description-box">
            <p>Ai făcut rezervare  în agenda lui #Moș #Crăciun pentru seara de 24 Decembrie? În noaptea de Ajun Moșul împreună cu unul din ajutoarele sale (Spiriduși sau Craciunița) poate veni în casa ta, pentru a împărți cadouri celor mici și prietenilor apropiați, cu care ai ales să sărbătorești Crăciunul 🙂
 Pachetele valabile doar in seara de Ajun, pe 24 decembrie:

1-2 copii 250 ron;
3-5 copii 300 ron;
6-10 copii 350 ron;
+10 copii 400 ron.

Moșul va sta alături de voi cât timp va fi necesar pentru a împărți cadourile și a se bucura de poeziile spuse de cei mici.</p>
            </div>
              </div>
              
          )}
          {selectedEvent.id === 2 && (
              <div className="image-interval">
                <img src={eventIntervals[2][currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
                <div className="star-rating-container">
              <p>Rate this event:</p>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
            </div>
            <div className="icons-container">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/calendar--v2.png" alt="calendar--v2" /> <span className='icon-text'> Duminică, 3 Decembrie </span>
           </div>
           <div className="icons-container1">
           <img width="40" height="40" src="https://img.icons8.com/clouds/100/timer.png" alt="timer"/> <span className='icon-text'> Ora 15:00</span>
           </div>
           <div className="icons-container2" onClick={() => handleLocationClick([47.1539306289, 27.5695681572], 'Trilulici Club')}>
              <img width="40" height="40" src="https://img.icons8.com/clouds/100/map-pin.png" alt="map-pin" />
              <span className='icon-text'> Loc de joacă: Trilulici Club</span>
            </div>
           <div className="event-ended-message">
           <img width="20" height="20" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/> <span className='icon-text'>This event has ended.</span>
           </div>
           <div className="description-box">
            <p>Cu inimile pline de emoție si nerăbdare, ne pregătim pentru sosirea lui Moș Nicolae. 
L-am invitat la noi, la un ceai și un fursec😍
Vă invităm la un atelier copii- părinți să retrăim alături de copiii noștri, bucuria sărbătorilor de iarnă. Atelier decorațiuni, fursecuri, ceai cald, cadouri pentru copii. Preț copil + părinte: 150 lei, 2h30.</p>
            </div>
              </div>
              
          )}
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
        ) : (
          <div className="intro-container">
          <h2>Welcome to Interactive Events!</h2>
          <p>
            Discover and participate in exciting events. Check out our diverse
            range of activities tailored for every interest.
          </p>
          <p>
            <strong>Why explore our events?</strong> Each event is crafted with
            care to provide a unique and memorable experience. Click on an event
            to learn more about its details and why you shouldn't miss it!
          </p>
          
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmitFeedback}>
            <label htmlFor="feedback">Your Feedback:</label>
            <img width="32" height="32" src="https://img.icons8.com/neon/96/filled-like.png" alt="heart" />
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      )}
    </div>
  </div>
          )}

export default Event;