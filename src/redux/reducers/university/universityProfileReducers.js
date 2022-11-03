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

export const universityProfileReducer = (
  state = {
    basic: {},
    mous: [],
    contacts: [],
    aggrements: [],
    updates: [],
    documents: [],
    applicationProcess: [],
    guestVisits: [],
    meetings: [],
    programs: [],
  },
  action
) => {
  switch (action.type) {
    case UNIVERSITY_PROFILE_BASIC_REQUEST:
      return {
        ...state,
        basic: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_BASIC_SUCCESS:
      return {
        ...state,

        basic: {
          loading: false,
          university: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_BASIC_FAIL:
      return {
        ...state,
        basic:{
            loading: false,
            error: action.payload,
        }
      };
    case UNIVERSITY_PROFILE_MOU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_MOU_SUCCESS:
      return {
        ...state,
        loading: false,
        mous: action.payload,
      };
    case UNIVERSITY_PROFILE_MOU_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNIVERSITY_PROFILE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case UNIVERSITY_PROFILE_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        aggrements: action.payload,
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNIVERSITY_PROFILE_UPDATES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_UPDATES_SUCCESS:
      return {
        ...state,
        loading: false,
        updates: action.payload,
      };
    case UNIVERSITY_PROFILE_UPDATES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNIVERSITY_PROFILE_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        documents: action.payload,
      };
    case UNIVERSITY_PROFILE_DOCUMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNIVERSITY_PROFILE_APPLICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNIVERSITY_PROFILE_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        applicationProcess: action.payload,
      };

    case UNIVERSITY_PROFILE_APPLICATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
