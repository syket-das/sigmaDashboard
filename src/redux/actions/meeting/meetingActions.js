import axios from 'axios';
import {
  GET_MEETINGS_FAIL,
  GET_MEETINGS_REQUEST,
  GET_MEETINGS_SUCCESS,
  GET_MEETING_FAIL,
  GET_MEETING_REQUEST,
  GET_MEETING_SUCCESS,
} from '../../constants/meeting/meetingConstants';

const baseUrl = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

export const meetingList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MEETINGS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseUrl}/api/v2/meeting/all`, config);

    dispatch({
      type: GET_MEETINGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MEETINGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const meetingDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MEETING_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseUrl}/api/v2/meeting/single/${id}`, config);

    dispatch({
      type: GET_MEETING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MEETING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}