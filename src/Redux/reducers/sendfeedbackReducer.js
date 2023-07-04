import {
  SEND_FEEDBACK,
  SEND_FEEDBACK_ERROR,
  FEEDBACK_LOADING,
} from '../actions/types';

const initialState = {
  feedback_loading: false,
  feedback: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FEEDBACK_LOADING:
      return {
        ...state,
        feedback_loading: true,
      };
    case SEND_FEEDBACK:
      return {
        ...state,
        feedback: payload,
        feedback_loading: false,
      };
    case SEND_FEEDBACK_ERROR:
      return {
        ...state,
        feedback_loading: false,
        feedback: null,
      };

    default:
      return state;
  }
}
