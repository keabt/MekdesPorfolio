import React from 'react';
import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBlog, faCoffee, faGlobe, faToolbox} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const EmailForm = () => {
  return (
    <div>
      <FontAwesomeIcon icon = {faInstagram} className='icon' id='instagram'></FontAwesomeIcon>
      <FontAwesomeIcon icon = {faFacebook} className='icon' id='facebook'></FontAwesomeIcon>
      <FontAwesomeIcon icon = {faLinkedin} className='icon' id='linkedin'></FontAwesomeIcon>
      <FontAwesomeIcon icon = {faTwitter} className='icon' id='twitter'></FontAwesomeIcon>

      <FontAwesomeIcon icon = {faGlobe} className='icon' id='website'></FontAwesomeIcon>



      
    </div>
  );
};

export default EmailForm;
