import axios from 'axios';
import {
  UNIVERSITY_PROFILE_APPLICATION_FAIL,
  UNIVERSITY_PROFILE_APPLICATION_REQUEST,
  UNIVERSITY_PROFILE_APPLICATION_SUCCESS,
  UNIVERSITY_PROFILE_APPLICATION_UPDATE_FAIL,
  UNIVERSITY_PROFILE_APPLICATION_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_APPLICATION_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_BASIC_FAIL,
  UNIVERSITY_PROFILE_BASIC_REQUEST,
  UNIVERSITY_PROFILE_BASIC_SUCCESS,
  UNIVERSITY_PROFILE_BASIC_UPDATE_FAIL,
  UNIVERSITY_PROFILE_BASIC_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_BASIC_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_CONTACT_FAIL,
  UNIVERSITY_PROFILE_CONTACT_REQUEST,
  UNIVERSITY_PROFILE_CONTACT_SUCCESS,
  UNIVERSITY_PROFILE_CONTACT_UPDATE_FAIL,
  UNIVERSITY_PROFILE_CONTACT_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_CONTACT_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_DOCUMENT_FAIL,
  UNIVERSITY_PROFILE_DOCUMENT_REQUEST,
  UNIVERSITY_PROFILE_DOCUMENT_SUCCESS,
  UNIVERSITY_PROFILE_DOCUMENT_UPDATE_FAIL,
  UNIVERSITY_PROFILE_DOCUMENT_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_DOCUMENT_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_SUCCESS,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_FAIL,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_MOU_FAIL,
  UNIVERSITY_PROFILE_MOU_REQUEST,
  UNIVERSITY_PROFILE_MOU_SUCCESS,
  UNIVERSITY_PROFILE_MOU_UPDATE_FAIL,
  UNIVERSITY_PROFILE_MOU_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_MOU_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_PROGRAM_FAIL,
  UNIVERSITY_PROFILE_PROGRAM_REQUEST,
  UNIVERSITY_PROFILE_PROGRAM_SUCCESS,
  UNIVERSITY_PROFILE_PROGRAM_UPDATE_FAIL,
  UNIVERSITY_PROFILE_PROGRAM_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_PROGRAM_UPDATE_SUCCESS,
  UNIVERSITY_PROFILE_UPDATES_FAIL,
  UNIVERSITY_PROFILE_UPDATES_REQUEST,
  UNIVERSITY_PROFILE_UPDATES_SUCCESS,
  UNIVERSITY_PROFILE_UPDATES_UPDATE_FAIL,
  UNIVERSITY_PROFILE_UPDATES_UPDATE_REQUEST,
  UNIVERSITY_PROFILE_UPDATES_UPDATE_SUCCESS,
} from '../../constants/university/UniversityProfileConstants';

const baseUrl = 'https://sigmalpu.herokuapp.com';
const localUrl = 'http://localhost:5000';

// University Profile Basic
export const universityProfileBasic =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_BASIC_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/${universityId}`,
        config
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

export const updateUniversityProfileBasic =
  (basicId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_BASIC_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/${basicId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_BASIC_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_BASIC_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile Basic

// University Profile MOU

export const universityProfileMOUS =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_MOU_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/mou/${universityId}`,
        config
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

export const updateUniversityProfileMOUS =
  (mouId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_MOU_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/mou/${mouId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_MOU_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_MOU_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile MOU

// University Profile Contact

export const universityProfileContacts =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_CONTACT_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/contact/${universityId}`,
        config
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

export const updateUniversityProfileContacts =
  (contactId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_CONTACT_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/contact/${contactId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_CONTACT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_CONTACT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile Contact

// University Profile Aggrements

export const universityProfileAggrements =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/finincialAgreements/${universityId}`,
        config
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

export const updateUniversityProfileAggrements =
  (aggrementId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/extra/finincialAgreements/${aggrementId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile Aggrements

// University Profile  Updates

export const universityProfileUpdates =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_UPDATES_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/update/${universityId}`,
        config
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

export const updateUniversityProfileUpdates =
  (updateId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_UPDATES_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/update/${updateId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_UPDATES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_UPDATES_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile  Updates

// University Profile  Documents

export const universityProfileDocuments =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_DOCUMENT_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/documents/${universityId}`,
        config
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

export const updateUniversityProfileDocuments =
  (documentId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_DOCUMENT_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/extra/documents/${documentId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_DOCUMENT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_DOCUMENT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile  Documents

// University Profile  Applications

export const universityProfileApplications =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_APPLICATION_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/extra/applications/${universityId}`,
        config
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

export const updateUniversityProfileApplications =
  (applicationId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_APPLICATION_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/extra/applications/${applicationId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_APPLICATION_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_APPLICATION_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile  Applications

// University Profile  Courses

export const universityProfilePrograms =
  (universityId) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_PROGRAM_REQUEST });

      const { data } = await axios.get(
        `${baseUrl}/api/v2/university/program/${universityId}`,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_PROGRAM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_PROGRAM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUniversityProfilePrograms =
  (programId, formData) => async (dispatch, getState) => {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      dispatch({ type: UNIVERSITY_PROFILE_PROGRAM_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${baseUrl}/api/v2/university/program/${programId}/update`,
        formData,
        config
      );

      dispatch({
        type: UNIVERSITY_PROFILE_PROGRAM_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNIVERSITY_PROFILE_PROGRAM_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// University Profile  Courses
