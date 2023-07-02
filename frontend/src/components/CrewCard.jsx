import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './CrewCard.css';

export default function CrewCard() {
  return (
    <div className='crew-card'>
      <div className="img-content">
      <img className='profile' src='hero.jpg' alt='Crew Profile' />
      </div>
      <div className="txt-content">
      <div className='name' href='destination_url'>Name</div>
      <div className='position' href='destination_url'>Position</div>
      <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='lg'/>
      </a>
      </div>
    </div>
  );
}
