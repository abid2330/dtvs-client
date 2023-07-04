import axiosInstance from '../../Utils';
import { toast } from 'react-toastify';
import {
  PASSWORD_LOADING,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
} from './types';

export const setLoading = () => {
  return {
    type: PASSWORD_LOADING,
  };
};

export const updatePassword =
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
        `/dashboard/changepassword/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_PASSWORD,
        payload: data,
      });
      navigate('/app/dashboard');
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
        type: UPDATE_PASSWORD_ERROR,
      });
    }
  };
