import {
  ADD_USER,
  ADD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_ERROR,
  SHOW_USER,
  SHOW_USER_ERROR,
  SHOW_USER_BY_ID,
  SHOW_USER_BY_ID_ERROR,
  USER_LOADING,
} from './types';
import axiosInstance from '../../Utils';
import { toast } from 'react-toastify';

export const setLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const showUser = () => async (dispatch, getState) => {
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
      '/dashboard/admin/getalluser',
      config
    );
    dispatch({
      type: SHOW_USER,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_USER_ERROR,
    });
  }
};

export const showUserByID = (id) => async (dispatch, getState) => {
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
      `/dashboard/admin/getalluser/${id}`,
      config
    );
    dispatch({
      type: SHOW_USER_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_USER_BY_ID_ERROR,
    });
  }
};

export const addUser =
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
        '/dashboard/admin/adduser',
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
        type: ADD_USER,
        payload: data,
      });
      dispatch(showUser());
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
        type: ADD_USER_ERROR,
      });
    }
  };

export const updateUser =
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
        `/dashboard/admin/updateuser/${id}`,
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
        type: UPDATE_USER,
        payload: data,
      });
      navigate('/app/manage-user');
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
        type: UPDATE_USER_ERROR,
      });
    }
  };

export const deleteUser = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  try {
    await axiosInstance.delete(`/dashboard/admin/deleteuser/${id}`, config);
    dispatch({
      type: DELETE_USER,
    });
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
      type: DELETE_USER_ERROR,
    });
  }
};
