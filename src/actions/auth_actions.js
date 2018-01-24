import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  GS_EMAIL_CHANGED,
  GS_PWD1_CHANGED,
  GS_PWD2_CHANGED,
} from '../types';

// LoginScreen
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

// GetStartedScreen
export const gsEmailChanged = (text) => {
  console.log(text);
  return {
    type: GS_EMAIL_CHANGED,
    payload: text,
  };
}

export const gsPwd1Changed = (text) => {
  console.log(text);
  return {
    type: GS_PWD1_CHANGED,
    payload: text,
  };
}

export const gsPwd2Changed = (text) => {
  console.log(text);
  return {
    type: GS_PWD2_CHANGED,
    payload: text,
  };
}
