import {
  AUTH_EMAIL_CHANGED,
  AUTH_PASSWORD_CHANGED,
} from '../types';

export const authEmailChanged = (text) => {
  return {
    type: AUTH_EMAIL_CHANGED,
    payload: text,
  };
};

export const authPasswordChanged = (text) => {
  return {
    type: AUTH_PASSWORD_CHANGED,
    payload: text,
  };
};
