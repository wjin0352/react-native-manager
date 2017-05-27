import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
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

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  // once this firebase event handler is triggered it for the life of the app will run the function inside any time new data values come across. In this case will, run a dispatch method with the payload from snapshot.val()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      }); 
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => console.log('saved!'));
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};