import {
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
} from '../../constants/university/universityConstants';

export const universityListReducer = (state = { universities: {} }, action) => {
  switch (action.type) {
    case UNIVERSITY_LIST_REQUEST:
      return { ...state, loading: true };
    case UNIVERSITY_LIST_SUCCESS:
      return { ...state,  universities: action.payload, loading: false };
    case UNIVERSITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
