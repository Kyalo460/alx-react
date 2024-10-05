import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
}

export const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const updatedNotifs = action.data.map(data => {
        return {
          ...data,
          isRead: false
        }
      });

      return {
        ...state,
        notifications: updatedNotifs
      }
    }

    case MARK_AS_READ: {
      const markedNotif = state.notifications.map(notification => {
        if (notification.id === action.index) {
          return {
            ...notification,
            isRead: true
          }
        } else {
          return notification
        }
      });

      return {
        ...state,
        notifications: markedNotif
      }
    }

    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }

    default:
      return state
  }
}