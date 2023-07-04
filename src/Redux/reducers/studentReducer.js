import {
  ADD_STUDENT,
  ADD_STUDENT_ERROR,
  DELETE_STUDENT,
  DELETE_STUDENT_ERROR,
  UPDATE_STUDENT,
  UPDATE_STUDENT_ERROR,
  SHOW_STUDENT,
  SHOW_STUDENT_ERROR,
  STUDENT_LOADING,
  SHOW_STUDENT_BY_ID_ERROR,
  SHOW_STUDENT_BY_ID,
} from '../actions/types';

const initialState = {
  loading: false,
  student: null,
  studentbyid: '',
  getstudents: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STUDENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_STUDENT:
      return {
        ...state,
        loading: false,
        getstudents: payload,
      };
    case SHOW_STUDENT_BY_ID:
      return {
        ...state,
        loading: false,
        studentbyid: payload,
      };

    case ADD_STUDENT:
    case UPDATE_STUDENT:
      return {
        ...state,
        loading: false,
        student: payload,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        loading: false,
      };
    case SHOW_STUDENT_ERROR:
    case SHOW_STUDENT_BY_ID_ERROR:
    case ADD_STUDENT_ERROR:
    case UPDATE_STUDENT_ERROR:
    case DELETE_STUDENT_ERROR:
      return {
        ...state,
        loading: false,
        studentbyid: '',
        student: null,
        getstudents: [],
      };
    default:
      return state;
  }
}
