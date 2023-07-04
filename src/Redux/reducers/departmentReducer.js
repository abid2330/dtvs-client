import {
  ADD_DEPARTMENT,
  ADD_DEPARTMENT_ERROR,
  UPDATE_DEPARTMENT,
  UPDATE_DEPARTMENT_ERROR,
  DELETE_DEPARTMENT,
  DELETE_DEPARTMENT_ERROR,
  SHOW_DEPARTMENT,
  SHOW_DEPARTMENT_ERROR,
  SHOW_DEPARTMENT_BY_ID,
  SHOW_DEPARTMENT_BY_ID_ERROR,
  DEPARTMENT_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  department: null,
  getdepartments: [],
  departmentbyid: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEPARTMENT_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SHOW_DEPARTMENT:
      return {
        ...state,
        loading: false,
        getdepartments: payload,
      };

    case SHOW_DEPARTMENT_BY_ID:
      return {
        ...state,
        loading: false,
        departmentbyid: payload,
      };

    case ADD_DEPARTMENT:
    case UPDATE_DEPARTMENT:
      return {
        ...state,
        loading: false,
        department: payload,
      };

    case DELETE_DEPARTMENT:
      return {
        ...state,
        loading: false,
      };

    case ADD_DEPARTMENT_ERROR:
    case UPDATE_DEPARTMENT_ERROR:
    case DELETE_DEPARTMENT_ERROR:
    case SHOW_DEPARTMENT_ERROR:
    case SHOW_DEPARTMENT_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        department: null,
        getdepartments: [],
        departmentbyid: '',
      };
    default:
      return state;
  }
}
