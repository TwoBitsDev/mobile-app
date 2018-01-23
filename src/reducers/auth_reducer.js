import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
} from '../types';

const INIT_STATE = {
   login_email: '',
   login_password: '',
 };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, login_email: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, login_password: action.payload };
    default:
      return state;
  }
};
