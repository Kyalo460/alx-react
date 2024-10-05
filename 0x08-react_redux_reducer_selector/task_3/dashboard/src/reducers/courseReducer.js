import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

const initialState = [];

export const courseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      const newArr = action.data.map(data => {
        return {
          ...data,
          isSelected: false
        }
      })

      return newArr;
    }

    case SELECT_COURSE: {
      const newArr = state.map(data => {
        if (data.id === action.index) {
          return {
            ...data,
            isSelected: true
          }
        } else {
          return data;
        }
      })

      return newArr;
    }

    case UNSELECT_COURSE: {
      const newArr = state.map(data => {
        if (data.id === action.index) {
          return {
            ...data,
            isSelected: false
          }
        } else {
          return data;
        }
      })

      return newArr;
    }

    default:
      return state
  }
}