import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';
import {
  UPLOAD_CHALAN,
  UPLOAD_CHALAN_ERROR,
  UPLOAD_PAID_CHALAN,
  UPLOAD_PAID_CHALAN_ERROR,
  SHOW_CHALAN,
  SHOW_CHALAN_ERROR,
  SHOW_PAID_CHALAN,
  SHOW_PAID_CHALAN_ERROR,
  APPLICATION_ID,
  APPLICATION_ID_ERROR,
  CHALAN_LOADING,
} from './types';

export const setLoading = () => {
  return {
    type: CHALAN_LOADING,
  };
};

export const uploadChalan =
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
        `/dashboard/user/uploadfeechalan/${id}`,
        values,
        config
      );
      dispatch({
        type: UPLOAD_CHALAN,
        payload: data,
      });
      navigate('/app/applications');
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
        type: UPLOAD_CHALAN_ERROR,
      });
    }
  };

export const showChalan = () => async (dispatch, getState) => {
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
      '/dashboard/student/showchalan',
      config
    );
    dispatch({
      type: SHOW_CHALAN,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CHALAN_ERROR,
    });
  }
};

export const uploadPaidChalan =
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
        `/dashboard/student/uploadpaidchalan/${id}`,
        values,
        config
      );
      dispatch({
        type: UPLOAD_PAID_CHALAN,
        payload: data,
      });
      navigate('/app/download-chalan');
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
        type: UPLOAD_PAID_CHALAN_ERROR,
      });
    }
  };

export const showPaidChalan = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(`/dashboard/user/showpaidchalan/${id}`, config);
    dispatch({
      type: SHOW_PAID_CHALAN,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_PAID_CHALAN_ERROR,
    });
  }
};

export const getApplicationID = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  try {
    const { data } = await axiosInstance.get(
      '/dashboard/student/application',
      config
    );
    dispatch({
      type: APPLICATION_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: APPLICATION_ID_ERROR,
    });
  }
};
