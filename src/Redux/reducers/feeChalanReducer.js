import {
  UPLOAD_CHALAN,
  UPLOAD_CHALAN_ERROR,
  SHOW_CHALAN,
  SHOW_CHALAN_ERROR,
  UPLOAD_PAID_CHALAN,
  UPLOAD_PAID_CHALAN_ERROR,
  SHOW_PAID_CHALAN,
  SHOW_PAID_CHALAN_ERROR,
  APPLICATION_ID,
  APPLICATION_ID_ERROR,
  CHALAN_LOADING,
} from '../actions/types';

const initialState = {
  chalan_loading: false,
  chalan: null,
  show_chalan: null,
  paid_chalan: null,
  show_paid_chalan: {},
  application_id: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHALAN_LOADING:
      return {
        ...state,
        chalan_loading: true,
      };
    case UPLOAD_CHALAN:
      return {
        ...state,
        chalan: payload,
        chalan_loading: false,
      };
    case SHOW_CHALAN:
      return {
        ...state,
        show_chalan: payload,
        chalan_loading: false,
      };
    case UPLOAD_PAID_CHALAN:
      return {
        ...state,
        paid_chalan: payload,
        chalan_loading: false,
      };
    case SHOW_PAID_CHALAN:
      return {
        ...state,
        show_paid_chalan: payload,
        chalan_loading: false,
      };
    case APPLICATION_ID:
      return {
        ...state,
        application_id: payload,
      };
    case UPLOAD_CHALAN_ERROR:
    case SHOW_CHALAN_ERROR:
    case UPLOAD_PAID_CHALAN_ERROR:
    case SHOW_PAID_CHALAN_ERROR:
    case APPLICATION_ID_ERROR:
      return {
        ...state,
        chalan_loading: false,
        chalan: null,
        show_chalan: null,
        paid_chalan: null,
        show_paid_chalan: {},
        application_id: {},
      };
    default:
      return state;
  }
}
