import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  contact: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEND_MESSAGE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        loading: false,
        contact: payload,
      };
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
        contact: null,
      };
    default:
      return state;
  }
}
