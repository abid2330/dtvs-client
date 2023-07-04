import {
  SHOW_FEEDBACK,
  SHOW_FEEDBACK_ERROR,
  SHOW_FEEDBACK_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  feedback: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_FEEDBACK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_FEEDBACK:
      return {
        ...state,
        loading: false,
        feedback: payload,
      };
    case SHOW_FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        feedback: [],
      };
    default:
      return state;
  }
}
