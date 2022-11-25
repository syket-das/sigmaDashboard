import {
  GET_MEETINGS_FAIL,
  GET_MEETINGS_REQUEST,
  GET_MEETINGS_SUCCESS,
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
