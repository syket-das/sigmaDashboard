import axios from 'axios';
import {
  UNIVERSITY_PROFILE_APPLICATION_FAIL,
  UNIVERSITY_PROFILE_APPLICATION_REQUEST,
  UNIVERSITY_PROFILE_APPLICATION_SUCCESS,
  UNIVERSITY_PROFILE_BASIC_FAIL,
  UNIVERSITY_PROFILE_BASIC_REQUEST,
  UNIVERSITY_PROFILE_BASIC_SUCCESS,
  UNIVERSITY_PROFILE_CONTACT_FAIL,
  UNIVERSITY_PROFILE_CONTACT_REQUEST,
  UNIVERSITY_PROFILE_CONTACT_SUCCESS,
  UNIVERSITY_PROFILE_DOCUMENT_FAIL,
  UNIVERSITY_PROFILE_DOCUMENT_REQUEST,
  UNIVERSITY_PROFILE_DOCUMENT_SUCCESS,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_SUCCESS,
  UNIVERSITY_PROFILE_MOU_FAIL,
  UNIVERSITY_PROFILE_MOU_REQUEST,
  UNIVERSITY_PROFILE_MOU_SUCCESS,
  UNIVERSITY_PROFILE_UPDATES_FAIL,
  UNIVERSITY_PROFILE_UPDATES_REQUEST,
  UNIVERSITY_PROFILE_UPDATES_SUCCESS,
} from '../../constants/university/UniversityProfileConstants';

const baseUrl = 'https://sigmalpu.herokuapp.com';

export const universityProfileBasic = (universityId) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_PROFILE_BASIC_REQUEST });

    const { data } = await axios.get(
      `${baseUrl}/api/v2/university/${universityId}`
    );

    dispatch({
      type: UNIVERSITY_PROFILE_BASIC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_PROFILE_BASIC_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const universityProfileMOUS = (universityId) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_PROFILE_MOU_REQUEST });

    const { data } = await axios.get(
      `${baseUrl}/api/v2/university/mou/${universityId}`
    );

    dispatch({
      type: UNIVERSITY_PROFILE_MOU_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_PROFILE_MOU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const universityProfileContacts = (universityId) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_PROFILE_CONTACT_REQUEST });

    const { data } = await axios.get(
      `${baseUrl}/api/v2/university/contact/${universityId}`
    );

    dispatch({
      type: UNIVERSITY_PROFILE_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_PROFILE_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const universityProfileAggrements =
  (universityId) => async (dispatch) => {
    try {
      dispatch({ type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/finincialAgreements/${universityId}`
      );

      dispatch({
        type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const universityProfileUpdates = (universityId) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_PROFILE_UPDATES_REQUEST });

    const { data } = await axios.get(
      `${baseUrl}/api/v2/university/update/${universityId}`
    );

    dispatch({
      type: UNIVERSITY_PROFILE_UPDATES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_PROFILE_UPDATES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const universityProfileDocuments =
  (universityId) => async (dispatch) => {
    try {
      dispatch({ type: UNIVERSITY_PROFILE_DOCUMENT_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/documents/${universityId}`
      );

      dispatch({
        type: UNIVERSITY_PROFILE_DOCUMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_DOCUMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const universityProfileApplications =
  (universityId) => async (dispatch) => {
    try {
      dispatch({ type: UNIVERSITY_PROFILE_APPLICATION_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/applications/${universityId}`
      );

      dispatch({
        type: UNIVERSITY_PROFILE_APPLICATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_APPLICATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
