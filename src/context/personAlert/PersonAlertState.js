import React, { useReducer } from 'react';
import axios from 'axios';
import PersonAlertContext from './personAlertContext';
import personAlertReducer from './personAlertReducer';
import {
  GET_PERSON_ALERTS,
  GET_PERSON_ALERT,
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

const PersonAlertState = (props) => {
  const initialState = {
    personAlerts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(personAlertReducer, initialState);

  // Get Person Alerts
  const getPersonAlerts = async () => {
    try {
      const res = await axios.get('/api/personAlert');

      dispatch({
        type: GET_PERSON_ALERTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get Person Alerts
  const getPersonAlert = async (id, name) => {
    try {
      const res = await axios.get(`/api/personAlert/${id}/${name}`);

      dispatch({
        type: GET_PERSON_ALERT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get a User's Person Alerts
  const getUserAlerts = async () => {
    try {
      const res = await axios.get('/api/personAlert/me');

      dispatch({
        type: GET_PERSON_ALERTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Person Alert
  const addPersonAlert = async (personAlert) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/personAlert', personAlert, config);

      dispatch({
        type: ADD_PERSON_ALERT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Person Alert
  const deletePersonAlert = async (id) => {
    try {
      await axios.delete(`/api/personAlert/${id}`);

      dispatch({
        type: DELETE_PERSON_ALERT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Person Alert
  const updatePersonAlert = async (personAlert) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/personAlert/${personAlert._id}`,
        personAlert,
        config
      );

      dispatch({
        type: UPDATE_PERSON_ALERT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ALERT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Person Alerts
  const clearPersonAlerts = () => {
    dispatch({ type: CLEAR_PERSON_ALERTS });
  };

  // Set Current Person Alerts
  const setCurrent = (personAlert) => {
    dispatch({ type: SET_CURRENT, payload: personAlert });
  };

  // Clear Current Person Alert
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter PersonAlerts
  const filterPersonAlerts = (text) => {
    dispatch({ type: FILTER_PERSON_ALERTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PersonAlertContext.Provider
      value={{
        personAlerts: state.personAlerts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPersonAlert,
        deletePersonAlert,
        setCurrent,
        clearCurrent,
        updatePersonAlert,
        filterPersonAlerts,
        clearFilter,
        getPersonAlerts,
        getPersonAlert,
        getUserAlerts,
        clearPersonAlerts,
      }}
    >
      {props.children}
    </PersonAlertContext.Provider>
  );
};

export default PersonAlertState;
