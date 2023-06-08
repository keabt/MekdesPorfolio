import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailForm from './Components/EmailForm';
import Footer from './Components/Footer';
import svgImage from './assets/under_construction.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompactDisc, faToolbox} from '@fortawesome/free-solid-svg-icons'
import bgMusic from './assets/Nancy.mp3';



function App() {
  const audioElement = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    // Handle the button click logic here
  };

  const playAudio = () => {
    if (audioElement.current.paused) {
      audioElement.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    } else {
      audioElement.current.pause();
    }
  };

  return (
    <div className='container'>
      <input type="checkbox" id="checkBox" />
      <label className="btn" htmlFor="checkBox">
      <FontAwesomeIcon className="music" icon={faCompactDisc} onClick={playAudio} />
      </label>      
      <audio ref={audioElement} src={bgMusic} loop />
      <img className='under_construction' src={svgImage} alt="SVG Image" />
      <h1><FontAwesomeIcon icon={faToolbox}/> WEB PAGE UNDER CONSTRUCTION <FontAwesomeIcon icon={faToolbox} /></h1>
      <EmailForm/>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  )
}

export default App
