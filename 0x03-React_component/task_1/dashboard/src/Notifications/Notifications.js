import React from 'react';
import './Notifications.css';
import { NotificationItem } from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export class Notifications extends React.Component {
  
  render() {
    const {displayDrawer, listNotifications} = this.props;
    return (
      <>
        <div className="menuItem">
          Your notifications:
        </div>
        {displayDrawer && (
          <div className='Notifications'>
          <p>Here is the list of notifications</p>
          {listNotifications.length == 0 ? (
            <span><bold>No new notification for now</bold></span>
          ) : (
            listNotifications.map((notification) => (
              notification.value ? <NotificationItem type={notification.type} value={notification.value} /> :
              <NotificationItem type={notification.type} html={notification.html} />
            ))
          )}
          <button style={{ right: '10px' }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt='Close icon'></img>
          </button>
        </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}
