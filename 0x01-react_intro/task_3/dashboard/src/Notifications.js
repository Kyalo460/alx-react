import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
      </ul>
      <button style={{ right: '10px' }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt='Close icon'></img>
      </button>
    </div>
  );
}
