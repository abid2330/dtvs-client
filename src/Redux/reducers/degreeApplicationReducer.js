import {
  SHOW_DEGREE_APPLICATION,
  SHOW_DEGREE_APPLICATION_ERROR,
  DELETE_DEGREE_APPLICATION,
  DELETE_DEGREE_APPLICATION_ERROR,
  SHOW_DEGREE_APPLICATION_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  degree: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_DEGREE_APPLICATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_DEGREE_APPLICATION:
      return {
        ...state,
        loading: false,
        degree: payload,
      };
    case DELETE_DEGREE_APPLICATION:
      return {
        ...state,
        loading: false,
      };
    case SHOW_DEGREE_APPLICATION_ERROR:
    case DELETE_DEGREE_APPLICATION_ERROR:
      return {
        ...state,
        loading: false,
        degree: [],
      };
    default:
      return state;
  }
}
