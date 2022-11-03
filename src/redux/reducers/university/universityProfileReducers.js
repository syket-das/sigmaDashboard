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
    mous: {},
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
        basic: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_REQUEST:
      return {
        ...state,
        mous: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_MOU_SUCCESS:
      return {
        ...state,
        mous: {
          loading: false,
          mous: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_FAIL:
      return {
        ...state,
        mous: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_REQUEST:
      return {
        ...state,
        contacts: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          loading: false,
          contacts: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_FAIL:
      return {
        ...state,
        contacts: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST:
      return {
        ...state,
        aggrements: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_SUCCESS:
      return {
        ...state,
        aggrements: {
          loading: false,
          aggrements: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL:
      return {
        ...state,
        aggrements: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_REQUEST:
      return {
        ...state,
        updates: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_SUCCESS:
      return {
        ...state,
        updates: {
          loading: false,
          updates: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_FAIL:
      return {
        ...state,
        updates: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_DOCUMENT_REQUEST:
      return {
        ...state,
        documents: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: {
          loading: false,
          documents: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_DOCUMENT_FAIL:
      return {
        ...state,
        documents: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_APPLICATION_REQUEST:
      return {
        ...state,
        applicationProcess: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_APPLICATION_SUCCESS:
      return {
        ...state,
        applicationProcess: {
          loading: false,
          applicationProcess: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_APPLICATION_FAIL:
      return {
        ...state,
        applicationProcess: {
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
