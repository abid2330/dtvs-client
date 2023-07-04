import {
  PASSWORD_LOADING,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
} from '../actions/types';

const initialState = {
  pass_loading: false,
  update_pass: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PASSWORD_LOADING:
      return {
        ...state,
        pass_loading: true,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        update_pass: payload,
        pass_loading: false,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        update_pass: null,
        pass_loading: false,
      };

    default:
      return state;
  }
}
