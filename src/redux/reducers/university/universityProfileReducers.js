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
  UNIVERSITY_PROFILE_GUEST_FAIL,
  UNIVERSITY_PROFILE_GUEST_REQUEST,
  UNIVERSITY_PROFILE_GUEST_SUCCESS,
  UNIVERSITY_PROFILE_MEETING_FAIL,
  UNIVERSITY_PROFILE_MEETING_REQUEST,
  UNIVERSITY_PROFILE_MEETING_SUCCESS,
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
    case UNIVERSITY_PROFILE_BASIC_UPDATE_REQUEST:
      return {
        ...state,
        basic: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_BASIC_SUCCESS:
    case UNIVERSITY_PROFILE_BASIC_UPDATE_SUCCESS:
      return {
        ...state,

        basic: {
          loading: false,
          university: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_BASIC_FAIL:
    case UNIVERSITY_PROFILE_BASIC_UPDATE_FAIL:
      return {
        ...state,
        basic: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_REQUEST:
    case UNIVERSITY_PROFILE_MOU_UPDATE_REQUEST:
      return {
        ...state,
        mous: {
          ...state.mous,
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_MOU_SUCCESS:
      return {
        ...state,
        mous: {
          ...state.mous,
          loading: false,
          mous: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_UPDATE_SUCCESS:
      return {
        ...state,
        mous: {
          ...state.mous,
          loading: false,
          updated: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_FAIL:
      return {
        ...state,
        mous: {
          ...state.mous,
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_MOU_UPDATE_FAIL:
      return {
        ...state,
        mous: {
          ...state.mous,
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_REQUEST:
    case UNIVERSITY_PROFILE_CONTACT_UPDATE_REQUEST:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          contacts: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_UPDATE_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          updated: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_CONTACT_FAIL:
    case UNIVERSITY_PROFILE_CONTACT_UPDATE_FAIL:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_REQUEST:
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_REQUEST:
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
          ...state.aggrements,
          loading: false,
          aggrements: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_SUCCESS:
      return {
        ...state,
        aggrements: {
          ...state.aggrements,
          loading: false,
          updated: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_FAIL:
    case UNIVERSITY_PROFILE_FININCIAL_AGREEMENT_UPDATE_FAIL:
      return {
        ...state,
        aggrements: {
          ...state.aggrements,
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_REQUEST:
    case UNIVERSITY_PROFILE_UPDATES_UPDATE_REQUEST:
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
          ...state.updates,
          loading: false,
          updates: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_UPDATE_SUCCESS:
      return {
        ...state,
        updates: {
          ...state.updates,
          loading: false,
          updated: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_UPDATES_FAIL:
    case UNIVERSITY_PROFILE_UPDATES_UPDATE_FAIL:
      return {
        ...state,
        updates: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_DOCUMENT_REQUEST:
    case UNIVERSITY_PROFILE_DOCUMENT_UPDATE_REQUEST:
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
          ...state.documents,
          loading: false,
          documents: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_DOCUMENT_UPDATE_SUCCESS:
      return {
        ...state,
        documents: {
          ...state.documents,
          loading: false,
          updated: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_DOCUMENT_FAIL:
    case UNIVERSITY_PROFILE_DOCUMENT_UPDATE_FAIL:
      return {
        ...state,
        documents: {
          loading: false,
          error: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_APPLICATION_REQUEST:
    case UNIVERSITY_PROFILE_APPLICATION_UPDATE_REQUEST:
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
          ...state.applicationProcess,
          loading: false,
          applicationProcess: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_APPLICATION_UPDATE_SUCCESS:
      return {
        ...state,
        applicationProcess: {
          ...state.applicationProcess,
          loading: false,
          updated: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_APPLICATION_FAIL:
    case UNIVERSITY_PROFILE_APPLICATION_UPDATE_FAIL:
      return {
        ...state,
        applicationProcess: {
          loading: false,
          error: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_PROGRAM_REQUEST:
    case UNIVERSITY_PROFILE_PROGRAM_UPDATE_REQUEST:
      return {
        ...state,
        programs: {
          loading: true,
        },
      };
    case UNIVERSITY_PROFILE_PROGRAM_SUCCESS:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
          programs: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_PROGRAM_UPDATE_SUCCESS:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
          updated: action.payload,
        },
      };
    case UNIVERSITY_PROFILE_PROGRAM_FAIL:
    case UNIVERSITY_PROFILE_PROGRAM_UPDATE_FAIL:
      return {
        ...state,
        programs: {
          loading: false,
          error: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_GUEST_REQUEST:
      return {
        ...state,
        guestVisits: {
          loading: true,
        },
      };

    case UNIVERSITY_PROFILE_GUEST_SUCCESS:
      return {
        ...state,
        guestVisits: {
          ...state.guestVisits,
          loading: false,
          guestVisits: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_GUEST_FAIL:
      return {
        ...state,
        guestVisits: {
          loading: false,
          error: action.payload,
        },
      };

    case UNIVERSITY_PROFILE_MEETING_REQUEST:
      return {
        ...state,
        meetings: {
          loading: true,
        },
      };

    case UNIVERSITY_PROFILE_MEETING_SUCCESS:
      return {
        ...state,
        meetings: {
          ...state.meetings,
          loading: false,
          meetings: action.payload.meetings,
        },
      };

    case UNIVERSITY_PROFILE_MEETING_FAIL:
      return {
        ...state,
        meetings: {
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
