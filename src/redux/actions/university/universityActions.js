import axios from 'axios';
import {
  CLEAR_ERRORS,
  CREATE_UNIVERSITY_FAIL,
  CREATE_UNIVERSITY_REQUEST,
  CREATE_UNIVERSITY_SUCCESS,
  RESET_UNIVERSITY,
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
} from '../../constants/university/universityConstants';

const baseUrl = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

export const universityList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: UNIVERSITY_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}/api/v2/university/all`,
      config
    );

    dispatch({
      type: UNIVERSITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addUniversity = (university) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_UNIVERSITY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/v2/university/add`,
      university,
      config
    );

    dispatch({
      type: CREATE_UNIVERSITY_SUCCESS,
      payload: data.university,
    });
  } catch (error) {
    dispatch({
      type: CREATE_UNIVERSITY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetUniversity = () => (dispatch) => {
  dispatch({ type: RESET_UNIVERSITY });
};


export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}
