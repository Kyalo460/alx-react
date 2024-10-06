import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"
import {Map} from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";
const initialState = Map({
  notifications: [],
  filter: 'DEFAULT'
})

export const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      const newArr = normalizedData.result.map(courseId => {
        return {
          ...normalizedData.entities.notifications[courseId],
          isRead: false
        }
      });

      return {
        ...state,
        notifications: newArr
      }
    }

    case MARK_AS_READ: {
      return state.setIn(['entities', action.index.toSting(), 'isRead'], true);

    }

    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }

    default:
      return state
  }
}