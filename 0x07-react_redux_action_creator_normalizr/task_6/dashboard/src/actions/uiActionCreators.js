import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes'
import fetch from 'node-fetch';
import {dispatch} from 'react-redux';

export const login = (email, password) => ({
  type: LOGIN,
  user: {
    email,
    password
  }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
  dispatch(login(email, password));

  fetch('/login-success.json')
    .then((response) => {
      if(!response.ok) {
        dispatch(loginFailure);
      } else {
        dispatch(loginSuccess);
      }
    });
} 