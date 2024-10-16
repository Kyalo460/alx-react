import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
})

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
})

export const setLoadingState = (boolean) => ({
  type: 'SET_LOADING_STATE',
  boolean
})

export const setNotifications = (data) => ({
  type: 'FETCH_NOTIFICATIONS_SUCCESS',
  data
})

export const fetchNotifications = () => {
  return async (dispatch, getState) => {
    dispatch(setLoadingState(true));

    const response = await fetch('/notifications.json')
    const data = await response.json()
    dispatch(setNotifications(data));
    dispatch(setLoadingState(false));
  }
}