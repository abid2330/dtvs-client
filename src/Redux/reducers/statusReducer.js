import {
  STATUS_LOADING,
  SHOW_STATUS,
  SHOW_STATUS_ERROR,
  UPDATE_STATUS,
  UPDATE_STATUS_ERROR,
} from '../actions/types';

const initialState = {
  status_loading: false,
  status: null,
  show_status: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATUS_LOADING:
      return {
        ...state,
        status_loading: true,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        status: payload,
        status_loading: false,
      };
    case SHOW_STATUS:
      return {
        ...state,
        show_status: payload,
        status_loading: false,
      };
    case UPDATE_STATUS_ERROR:
    case SHOW_STATUS_ERROR:
      return {
        ...state,
        status_loading: false,
        status: null,
        show_status: null,
      };

    default:
      return state;
  }
}
