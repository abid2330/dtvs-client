import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_BTN_LOADING,
  LOGOUT,
  USER_LOADED,
  AUTH_FAIL,
  FORGET_PASSWORD,
  FORGET_FAIL, 
  CHANGE_FAIL,
  CHANGE_PASSWORD,
} from './types';

export const setLoading = () => {
  return {
    type: LOGIN_BTN_LOADING,
  };
};

export const loadUsers = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get('/getalldata', config);
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: AUTH_FAIL,
    });
  }
};
export const loginUser = (data) => async (dispatch) => {
  const config = {
    header: {
      'Content/Type': 'application/json',
    },
  };
  dispatch(setLoading());
  try {
    const res = await axiosInstance.post('/login', data, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
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
      type: LOGIN_FAIL,
    });
  }
};

export const forgetPassword = (values, formikHelpers) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.post(
      '/forgetpassword',
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
      type: FORGET_PASSWORD,
      payload: data,
    });
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
      type: FORGET_FAIL,
    });
  }
};

export const changePassword =
  (values, navigate, resetToken) => async (dispatch) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/resetpassword/${resetToken}`,
        values,
        config
      );
      dispatch({
        type: CHANGE_PASSWORD,
        payload: data,
      });
      navigate('/login/app');
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
        type: CHANGE_FAIL,
      });
    }
  };

export const logoutUser = () => (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: LOGOUT,
  });
};
