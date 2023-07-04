import {
  UPLOAD_CSV_FILE,
  UPLOAD_CSV_FILE_ERROR,
  SET_UPLOAD_CSV_FILE,
  UPLOAD_CSV_FILE_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  uploadcsv: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_CSV_FILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_UPLOAD_CSV_FILE:
    case UPLOAD_CSV_FILE:
      return {
        ...state,
        loading: false,
        uploadcsv: payload,
      };
    case UPLOAD_CSV_FILE_ERROR:
      return {
        ...state,
        loading: false,
        uploadcsv: null,
      };
    default:
      return state;
  }
}
