import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeafletMap from '../components/LeafletMap';
import '../pages/PinPage.css';



const PinPage = () => {
    const location = useLocation();
    const { selectedPin } = location.state || {};
  
    

  
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const daysOfWeek = ["Joi", "Vineri", "Sâmbătă", "Duminică", "Luni", "Marți", "Miercuri"];
  const schedule = [
    { start: "13:00", end: "21:00" },
    { start: "13:00", end: "21:00" },
    { start: "11:00", end: "21:00" },
    { start: "11:00", end: "21:00" },
    { start: "13:00", end: "21:00" },
    { start: "13:00", end: "21:00" },
    { start: "13:00", end: "21:00" }
  ];
  const [comments, setComments] = useState([]);
  const [commentCounter, setCommentCounter] = useState(0);

  const displaySchedule = () => {
    const table = document.getElementById('scheduleTable');
    const row = table.insertRow();
    const dayCell = row.insertCell();
    dayCell.innerHTML = daysOfWeek[currentDayIndex];
    const timeCell = row.insertCell();
    timeCell.innerHTML = schedule[currentDayIndex].start + " - " + schedule[currentDayIndex].end;
  };

  const nextDay = () => {
    setCurrentDayIndex((currentDayIndex + 1) % daysOfWeek.length);
    resetTable();
    displaySchedule();
  };

  const resetTable = () => {
    const table = document.getElementById('scheduleTable');
    table.innerHTML = "<tr><th>Zi</th><th>Orar</th></tr>";
  };

  const addComment = () => {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
      setComments([...comments, commentText]);
      commentInput.value = '';
      updateCommentCounter();
    }
  };

  const updateCommentCounter = () => {
    setCommentCounter(commentCounter + 1);
  };

  return (
    <div className="pined-page-container">
      <div className="playground-details">
        {selectedPin && (
          <>
            <h2>{selectedPin.message}</h2>
           
            {
                <div id="playground-info">
                <img src="https://sniffo.ro/img/company/domain/1336/original/17157440_774820782674794_2471036533725968672_o.jpg" alt="ozPlay" width="150" height="150" />
                <img src="https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/358373167_579594214373227_8204732665818420300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nfyPiySmkk8AX8KwR8y&_nc_ht=scontent.fclj1-2.fna&cb_e2o_trans=q&oh=00_AfALyuXO6WBEmTD8L7Gsg4BPzNTNarbpNuJcnFpVtvBkgA&oe=655C797B" alt="loc-de joaca" width="150" height="150" />
                <img src="https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/401510207_646520537680594_1964113055769046885_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=km2eUMBBliAAX_asLXU&_nc_oc=AQlE0o09SxYIBApfTdA1HfRq-N4SdjhdIa2OL92Zg1LnAkdUPcaBeRgBr6259Aje5f8&_nc_ht=scontent.fclj1-2.fna&cb_e2o_trans=q&oh=00_AfBJmnPU00GE_9rb_XWkHaT7-YQa8InPWHJlQcqkMEVzQw&oe=655A9E89" alt="loc-de-joaca" width="150" height="150" />
        
                <div id="rating-stars">
                  <span className="half">&#9733;</span>
                  <span className="half">&#9733;</span>
                  <span className="half">&#9733;</span>
                  <span className="half">&#9733;</span>
                  <span>&#9733;</span>
                </div>
                
        <a href="tel:+0745 006 301">📞: 0745 006 301</a>
        <a href="mailto:oz.play@yahoo.com">💬: oz.play@yahoo.com</a>
      </div>
            }
          </>
        )}
      </div>
      <div className="map-container">
      <LeafletMap pins={selectedPin ? [selectedPin] : []} />
      </div>
    </div>
  );
};

export default PinPage;