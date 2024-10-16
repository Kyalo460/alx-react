import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import {Map} from 'immutable'
import { coursesNormalizer } from "../schema/courses";

const initialState = Map([]);

export const courseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      const newArr = normalizedData.result.map(courseId => {
        return {
          ...normalizedData.entities.courses[courseId],
          isSelected: false
        }
      })

      return newArr;
    }

    case SELECT_COURSE: {
      const updatedData = state.setIn(['entities', action.index.toString(), 'isSelected'], true);
      return updatedData;
    }

    case UNSELECT_COURSE: {
      const updatedData = state.setIn(['entities', action.index.toString(), 'isSelected'], false);
      return updatedData;
    }

    default:
      return state
  }
}