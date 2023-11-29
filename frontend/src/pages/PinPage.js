import React, {useState} from 'react';
import { useEffect } from 'react';
import './PinPage.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
const PinPage = () => {
    const navigate = useNavigate ();
    const {pin_id} = useParams();
    const [place, setPlace] = useState(null);
    const [error, setError] = useState("");
    const getPlace = async () => {
        try {
            const response = await axios.get(config.url + '/pins/' + parseInt(pin_id) + "/place");
            setPlace(response.data);
        } catch (error) {
            console.log('Failed to fetch from backend');
            console.log(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getPlace();
        };

        fetchData();
    }, []);
    /*
    const place = {
        id: 1,
        title: "Loc de joacă",
        description: "Descopera Magia Jocului in Lumea lui Oz! Jocuri pentru copii si pentru parinti… sau te poti relaxa la o cafea, in timp ce copiii au parte de distractie si de activitati creative sub supravegherea atenta a personalului nostru.",
        bottomAttendance: "15 min",
        upperAttendance: "2.5 ore",
        adress: "Strada Vasile Lupu 134, Iași 700001",
        phoneNumber: "0745 006 301",
        email: "oz.play@yahoo.com",
    };

     */
    const onBackButtonClick =  () => {
        navigate("/");
    }

  return (
    <div>
        <Header/>
        {place ? (
            <>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
      <span><center> Pagină · {place.name}</center></span>
      <span><center>⏳ De obicei, oamenii petrec Între {place.bottomAttendance} și {place.upperAttendance} aici</center></span>
      <div className="grid-container">
          <div>
              <h3><center>Prezentare generala</center></h3>
              <h3>Descriere</h3>
              <p>{place.description}</p>
              <h3>Adresă: {place.address}</h3>
              <h3>Telefon: {place.phoneNumber}</h3>
              <h3>📧 {place.email}</h3>
          </div>
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
      </div>
      <button onClick={onBackButtonClick}>Înapoi la hartă</button>
            </>) : null}
    </div>
  );
};

function toggleProgram() {
  const programList = document.getElementById('programList');
  programList.classList.toggle('expanded');
}
  
export default PinPage;
