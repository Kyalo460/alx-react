import {Map} from 'immutable'

export const filterTypeSelected = state => state.filter;

export const getNotifications = state => Map(state.notifications);

export const getUnreadNotifications = state => {
  const unreadNotifs = state.notifications.filter(notification => notification.isread === false)

  return Map(unreadNotifs);
}