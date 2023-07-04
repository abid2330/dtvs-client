import axiosInstance from '../../Utils';
import {
  SHOW_DEGREE_APPLICATION,
  SHOW_DEGREE_APPLICATION_ERROR,
  DELETE_DEGREE_APPLICATION,
  DELETE_DEGREE_APPLICATION_ERROR,
  SHOW_DEGREE_APPLICATION_LOADING,
} from './types';

export const setLoading = () => {
  return {
    type: SHOW_DEGREE_APPLICATION_LOADING,
  };
};

export const showApplication = () => async (dispatch, getState) => {
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
      '/dashboard/admin/getallapplications',
      config
    );
    dispatch({
      type: SHOW_DEGREE_APPLICATION,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEGREE_APPLICATION_ERROR,
    });
  }
};

export const deleteApplication = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    await axiosInstance.delete(
      `/dashboard/admin/deleteapplication/${id}`,
      config
    );
    dispatch({
      type: DELETE_DEGREE_APPLICATION,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_DEGREE_APPLICATION_ERROR,
    });
  }
};
