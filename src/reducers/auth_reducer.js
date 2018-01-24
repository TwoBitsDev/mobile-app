import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  GS_EMAIL_CHANGED,
  GS_PWD1_CHANGED,
  GS_PWD2_CHANGED,
} from '../types';

const INIT_STATE = {
   login_email: '',
   login_password: '',
   gs_email: '',
   gs_pwd1: '',
   gs_pw2: '',
 };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, login_email: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, login_password: action.payload };
    case GS_EMAIL_CHANGED:
      return { ...state, gs_email: action.payload };
    case GS_PWD1_CHANGED:
      return { ...state, gs_pwd1: action.payload };
    case GS_PWD2_CHANGED:
      return { ...state, gs_pwd2: action.payload };
    default:
      return state;
  }
};
