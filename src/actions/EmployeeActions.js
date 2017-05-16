import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // get current user from firebase, we need an user id for the ref below. CurrentUser has a uid property
  const { currentUser } = firebase.auth();
  
  // no need to dispatch (other than to reset form values) so we just return a function so we don't get errors
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // redirect, and added type reset so there is no back button to the form.
      .then(() => { 
        // dispatch to reset form values
        dispatch({ type: EMPLOYEE_CREATE });        
        Actions.employeeList({ type: 'reset' });
    });
  };
};