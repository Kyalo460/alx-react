import React from 'react';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  notification: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: '35%',
    padding: 5,
    border: '2px dashed rgb(243, 95, 95)'
  },
  notifImage: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 5,
    right: 5
  },
  notifButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    background: 'none',
    border: 'none'
  },
  menuItem: {
    position: 'absolute',
    top: 5,
    right: 30
  }
})

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
        <div className={css(styles.menuItem)}>
          Your notifications:
        </div>
        {displayDrawer && (
          <div className={css(styles.notification)}>
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
          <button className={css(styles.notifButton)} style={{ right: '10px' }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
            <img className={css(styles.notifImage)} src={closeIcon} alt='Close icon'></img>
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
