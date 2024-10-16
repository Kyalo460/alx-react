import React from 'react';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite'


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
    position: 'relative',
    float: 'right',
    zIndex: '20',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    opacity: '1',
    ':hover': {
      opacity: '0.5',
      transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
      animationName: {
        '0%': {
          transform: 'translateY(0px)',
        },
        '50%': {
          transform: 'translateY(-5px)',
        },
        '100%': {
          transform: 'translateY(5px)',
        }
      },
      animationDuration: '0.5s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: '3',
      animationDirection: 'alternate',
    }
  },
  smallScreen: {
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      paddingBottom: '100%',
      fontSize: 20,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      paddingLeft: 0,
      border: 0,
      listStyleType: 'none'
    }
  }
})

export class Notifications extends React.Component {
  render() {
    const {displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead} = this.props;
    return (
      <>
        {displayDrawer && (
          <div className={css(styles.notification, styles.smallScreen)}>
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
                markAsRead={() => markNotificationAsRead(notification.id)}
              />
            )) 
          )}
          <button className={css(styles.notifButton)} style={{ right: '10px' }} aria-label='Close' onClick={handleHideDrawer}>
            <img className={css(styles.notifImage)} src={closeIcon} alt='Close icon'></img>
          </button>
        </div>
        )}
        {displayDrawer === false && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications:
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: function() {},
  handleHideDrawer: function() {},
  markNotificationAsRead: function() {},
}
