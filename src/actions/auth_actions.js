import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
} from '../types';

export const loginEmailChanged = (text) => {
  console.log(text);
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text,
  };
};

export const loginPasswordChanged = (text) => {
  console.log(text);
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text,
  };
};
