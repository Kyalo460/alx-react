import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export class Notifications extends React.Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }
  
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

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
          {listNotifications.length === 0 ? (
            <span><strong>No new notification for now</strong></span>
          ) : (
            listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => this.markAsRead(notification.id)}
              />
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
  displayDrawer: true,
  listNotifications: [],
}
