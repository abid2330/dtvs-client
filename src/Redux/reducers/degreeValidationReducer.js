import {
  SEARCH,
  SHOW_SUCCESS_APPLICATION,
  SHOW_SUCCESS_APPLICATION_ERROR,
} from '../actions/types';

const initialState = {
  showapplication: null,
  visible: false,
  search: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search: payload,
        visible:false
      };
    case SHOW_SUCCESS_APPLICATION:
      return {
        ...state,
        showapplication: payload,
        visible: true,
      };
    case SHOW_SUCCESS_APPLICATION_ERROR:
      return { showapplication: null, search: '', visible: false };
    default:
      return state;
  }
}
