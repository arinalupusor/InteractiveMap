import React from 'react';
import { useEffect } from 'react';
import './PinPage.css';
const PinPage = (onBackButtonClick) => {
  return (
    <div>
      <h1><center>oZplay</center></h1>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
      <center>
        <img src="1.jpg" alt="oz" width="205" height="205" />
        <img src="3.jpg" alt="descriere" width="205" height="205" />
        <img src="OzPlay.jpg" alt="Play" width="205" height="205" />
      </center>
      <span><center> Pagină · Loc de joacă</center></span>
      <span><center>⏳ De obicei, oamenii petrec Între 15 min. și 2,5 h aici</center></span>
      <h3><center>Prezentare generala</center></h3>
      <h3>Descriere</h3>
      <p>Descopera Magia Jocului in Lumea lui Oz! Jocuri pentru copii si pentru parinti… sau te poti relaxa la o cafea, in timp ce copiii au parte de distractie si de activitati creative sub supravegherea atenta a personalului nostru.</p>
      <h3>Adresă: Strada Vasile Lupu 134, Iași 700001</h3>
      <div>
        <h3>Program</h3>
        <div className="arrow-down" onClick={toggleProgram}>▼</div>
        <ul className="expandable expanded" id="programList">
          <li><strong>Luni:</strong> 13–21</li>
          <li><strong>Marți:</strong> 13–21</li>
          <li><strong>Miercuri:</strong> 13–21</li>
          <li><strong>Joi:</strong> 13–21</li>
          <li><strong>Vineri:</strong> 13–21</li>
          <li><strong>Sâmbătă:</strong> 11–21</li>
          <li><strong>Duminică:</strong> 11–21</li>
        </ul>
      </div>
      <h3>Telefon: 0745 006 301</h3>
      <h3>📧 oz.play@yahoo.com</h3>

      <button onClick={onBackButtonClick}>Înapoi la hartă</button>
    </div>
  );
};

function toggleProgram() {
  const programList = document.getElementById('programList');
  programList.classList.toggle('expanded');
}
const ReviewList = () => {
  useEffect(() => {
    const ratingStars = document.getElementById('ratingStars');
    const stars = ratingStars.querySelectorAll('span');

    stars.forEach((star) => {
      star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-value');
        alert(`Ai acordat ${ratingValue} stele.`);
      });
    });
    return () => {
      stars.forEach((star) => {
        star.removeEventListener('click', () => {});
      });
    };
  }, []);
  return(
    <ul className="review-list">
    <li className="review">
      <h3>Recenzii</h3>
      <p>Ne vom întoarce (minimum de două ori pe săptămână). Personalul drăguț, locația frumoasă (o mulțime de parcare gratuită) și pereții de sare ajută pe toată lumea.</p>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    </li>
    <li className="review">
      <h3>Recenzii</h3>
      <p>Un loc de joaca foarte potrivit, copiii s-au distrat de minune, animatorii au facut jocuri interesante si au stiut sa le atraga atentia. Este loc mare si pentru parinti de stat in voie, relaxati. Petrecerea a fost una reusita!</p>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    </li>
  </ul>
);
};
  
export default PinPage;
