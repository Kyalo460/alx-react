import React from 'react';
import './Notifications.css';
import { NotificationItem } from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        Your notifications:
      </div>
      {displayDrawer && (
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
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
}
