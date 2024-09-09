import React from 'react';
import './Notifications.css';
import { NotificationItem } from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
      <button style={{ right: '10px' }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt='Close icon'></img>
      </button>
    </div>
  );
}
