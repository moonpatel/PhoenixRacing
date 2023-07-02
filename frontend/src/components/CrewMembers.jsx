import React from 'react';
import './CrewMembers.css';
import CrewCard from './CrewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export default function CrewMembers() {
  return (
    <div className='crew-members'>
      <div className="crew-hero">
      <div className='crew-hero-image'>
        <p>Meet the backbone of our racing team - a group of hardworking and dedicated individuals who fuel our drive for success. With unwavering passion and a shared commitment to excellence, they work tirelessly behind the scenes, ensuring our race machines are primed to perform at their peak. Together, they form a tightly-knit unit, seamlessly collaborating and pushing boundaries to push us towards the checkered flag.</p>
      </div>
      </div>
      <div className='team'>
        <h1 className='team-heading'>Team</h1>
        <div className='thick-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Technical</div>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Managerial</div>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='team-heading'>Departments</h1>
        <div className='thick-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Electrical</div>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Brakes</div>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Suspension & Steering</div>
          <div className='technical-crew'>
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='team-heading'>Web Development</h1>
        <div className='black-line'></div>
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
        <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
                </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
        <h1>Name</h1>
        <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
                </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
        <h1>Name</h1>
        <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
                </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
        <h1>Name</h1>
        <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
                </a>
        </div>
        <div className='black-line' />
      </div>
    </div>
  );
}
