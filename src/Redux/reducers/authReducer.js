import {
  LOGIN_SUCCESS,
  LOGIN_BTN_LOADING,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_FAIL,
  FORGET_FAIL,
  FORGET_PASSWORD,
  CHANGE_FAIL,
  CHANGE_PASSWORD,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('authToken'),
  isAuthenticated: null,
  loading: false,
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_BTN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('authToken', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CHANGE_FAIL:
    case FORGET_FAIL:
    case AUTH_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('authToken');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {},
      };
    default:
      return state;
  }
}
