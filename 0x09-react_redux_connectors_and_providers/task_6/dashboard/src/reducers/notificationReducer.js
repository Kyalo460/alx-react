import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"
import {Map} from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";
const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
  loading: false,
  messages: [
    {id: 1, type: "default", value: "New course available", isRead: false},
    {id: 2, type: "urgent", value: "New resume available", isRead: false},
    {id: 3, type: "urgent", value: "Urgent notification", isRead: false}
  ]
})

export const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      // const normalizedData = notificationsNormalizer(action.data);
      // const newArr = normalizedData.result.map(courseId => {
      //   return {
      //     ...normalizedData.entities.notifications[courseId],
      //     isRead: false
      //   }
      // });

      // return {
      //   ...state,
      //   notifications: newArr
      // }
      return state.mergeDeep({
        notifications: action.data
      })
    }

    case MARK_AS_READ: {
      // return state.setIn(['entities', action.index.toString(), 'isRead'], true);
      return state.setIn(['messages', action.index.toString(), 'isRead'], true)

    }

    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }

    case 'SET_LOADING_STATE': {
      return state.set('loading', action.boolean)
    }

    default:
      return state
  }
}