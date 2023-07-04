import {
  ADD_USER,
  ADD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_ERROR,
  SHOW_USER,
  SHOW_USER_ERROR,
  SHOW_USER_BY_ID,
  SHOW_USER_BY_ID_ERROR,
  USER_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  user: null,
  getusers: [],
  userbyid: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_USER:
      return {
        ...state,
        loading: false,
        getusers: payload,
      };
    case SHOW_USER_BY_ID:
      return {
        ...state,
        loading: false,
        userbyid: payload,
      };
    case ADD_USER:
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER_ERROR:
    case UPDATE_USER_ERROR:
    case SHOW_USER_ERROR:
    case DELETE_USER_ERROR:
    case SHOW_USER_BY_ID_ERROR:
      return {
        loading: false,
        user: null,
        getusers: [],
        userbyid: '',
      };
    default:
      return state;
  }
}
