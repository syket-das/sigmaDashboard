import axios from 'axios';
import {
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
} from '../../constants/university/universityConstants';

const baseUrl = 'https://sigmalpu.herokuapp.com';

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
