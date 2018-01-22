import {
  AUTH_EMAIL_CHANGED,
  AUTH_PASSWORD_CHANGED,
} from '../types';

const INIT_STATE = {
   auth_email: '',
   auth_password: '',
 };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_EMAIL_CHANGED:
      return { ...state, auth_email: action.payload };
    case AUTH_PASSWORD_CHANGED:
      return { ...state, auth_password: action.payload };
    default:
      return state;
  }
};
