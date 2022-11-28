import {
  CREATE_UNIVERSITY_FAIL,
  CREATE_UNIVERSITY_REQUEST,
  CREATE_UNIVERSITY_SUCCESS,
  RESET_UNIVERSITY,
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
} from '../../constants/university/universityConstants';

export const universityListReducer = (state = { universities: {} }, action) => {
  switch (action.type) {
    case UNIVERSITY_LIST_REQUEST:
      return { ...state, loading: true,
        newUniversity: false 
      };
    case UNIVERSITY_LIST_SUCCESS:
      return { ...state, universities: action.payload, loading: false };
    case UNIVERSITY_LIST_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_UNIVERSITY_REQUEST:
      return { ...state, loading: true };
    case CREATE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        loading: false,
        newUniversity: true,
      };
    case CREATE_UNIVERSITY_FAIL:
      return { loading: false, error: action.payload };


    case RESET_UNIVERSITY:
      return { ...state, newUniversity: false };


    default:
      return state;
  }
};
