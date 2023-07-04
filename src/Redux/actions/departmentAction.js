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
} from './types';
import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';

export const setLoading = () => {
  return {
    type: DEPARTMENT_LOADING,
  };
};

export const showDepartment = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      '/dashboard/admin/getalldepartment',
      config
    );
    dispatch({
      type: SHOW_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEPARTMENT_ERROR,
    });
  }
};

export const showDepartmentByID = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      `/dashboard/admin/getalldepartment/${id}`,
      config
    );
    dispatch({
      type: SHOW_DEPARTMENT_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEPARTMENT_BY_ID_ERROR,
    });
  }
};

export const addDepartment =
  (values, formikHelpers) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.post(
        '/dashboard/admin/adddepartment',
        values,
        config
      );
      toast.success(data.msg, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: ADD_DEPARTMENT,
        payload: data,
      });
      dispatch(showDepartment());
      formikHelpers.resetForm();
    } catch (err) {
      toast.error(err.response.data.error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: ADD_DEPARTMENT_ERROR,
      });
    }
  };

export const updateDepartment =
  (values, navigate, id) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/dashboard/admin/updatedepartment/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_DEPARTMENT,
        payload: data,
      });
      navigate('/app/manage-department');
    } catch (err) {
      toast.error(err.response.data.error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: UPDATE_DEPARTMENT_ERROR,
      });
    }
  };

export const deleteDepartment = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  try {
    await axiosInstance.delete(
      `/dashboard/admin/deletedepartment/${id}`,
      config
    );
    dispatch({
      type: DELETE_DEPARTMENT,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_DEPARTMENT_ERROR,
    });
  }
};
