import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';
import {
  UPDATE_STATUS,
  UPDATE_STATUS_ERROR,
  SHOW_STATUS,
  SHOW_STATUS_ERROR,
  STATUS_LOADING,
} from './types';

export const setLoading = () => {
  return {
    type: STATUS_LOADING,
  };
};

export const updateStatus =
  (values, navigate, id, user) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/dashboard/admin/updatestatus/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_STATUS,
        payload: data,
      });
      user.role === 'Admin'
        ? navigate('/app/degree-applications')
        : navigate('/app/applications');
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
        type: UPDATE_STATUS_ERROR,
      });
    }
  };

export const showStatus = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      '/dashboard/student/status',
      config
    );
    dispatch({
      type: SHOW_STATUS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STATUS_ERROR,
    });
  }
};
