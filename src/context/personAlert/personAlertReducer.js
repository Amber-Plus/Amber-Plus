import {
  GET_PERSON_ALERTS,
  GET_PERSON_ALERT,
  GET_USER_ALERTS,
  ADD_PERSON_ALERT,
  DELETE_PERSON_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PERSON_ALERT,
  FILTER_PERSON_ALERTS,
  CLEAR_FILTER,
  PERSON_ALERT_ERROR,
  CLEAR_PERSON_ALERTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PERSON_ALERTS:
    case GET_PERSON_ALERT:
    case GET_USER_ALERTS:
      return {
        ...state,
        personAlerts: action.payload,
        loading: false,
      };
    case ADD_PERSON_ALERT:
      return {
        ...state,
        personAlerts: [action.payload, ...state.personAlerts],
        loading: false,
      };
    case UPDATE_PERSON_ALERT:
      return {
        ...state,
        personAlerts: state.personAlerts.map((personAlert) =>
          personAlert._id === action.payload._id ? action.payload : personAlert
        ),
        loading: false,
      };
    case DELETE_PERSON_ALERT:
      return {
        ...state,
        personAlerts: state.personAlerts.filter(
          (personAlert) => personAlert._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_PERSON_ALERTS:
      return {
        ...state,
        personAlerts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_PERSON_ALERTS:
      return {
        ...state,
        filtered: state.personAlerts.filter((personAlert) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            personAlert.name.match(regex) || personAlert.email.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case PERSON_ALERT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
