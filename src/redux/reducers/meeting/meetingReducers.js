import {
  GET_MEETINGS_FAIL,
  GET_MEETINGS_REQUEST,
  GET_MEETINGS_SUCCESS,
  GET_MEETING_FAIL,
  GET_MEETING_REQUEST,
  GET_MEETING_SUCCESS,
} from '../../constants/meeting/meetingConstants';

export const meetingListReducer = (state = { meetings: [] }, action) => {
  switch (action.type) {
    case GET_MEETINGS_REQUEST:
      return {
        loading: true,
        meetings: [],
      };
    case GET_MEETINGS_SUCCESS:
      return {
        meetings: action.payload.meetings,
        loading: false,
      };
    case GET_MEETINGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const meetingDetailsReducer = (state = { meeting: {} }, action) => {
  switch (action.type) {
    case GET_MEETING_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_MEETING_SUCCESS:
      return {
        meeting: action.payload,
        loading: false,
      };
    case GET_MEETING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
