import {
  APPLY_APPLICATION_LOADING,
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_ERROR,
} from '../actions/types';

const initialState = {
  submit_application: null,
  apply_application_loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPLY_APPLICATION_LOADING:
      return {
        ...state,
        apply_application_loading: true,
      };
    case SUBMIT_APPLICATION:
      return {
        ...state,
        submit_application: payload,
        apply_application_loading: false,
      };
    case SUBMIT_APPLICATION_ERROR:
      return {
        ...state,
        submit_application: null,
        apply_application_loading: false,
      };
    default:
      return state;
  }
}
