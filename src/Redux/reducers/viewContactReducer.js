import {
  SHOW_CONTACT,
  SHOW_CONTACT_ERROR,
  SHOW_CONTACT_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  contact: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_CONTACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_CONTACT:
      return {
        ...state,
        loading: false,
        contact: payload,
      };
    case SHOW_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        contact: [],
      };

    default:
      return state;
  }
}
