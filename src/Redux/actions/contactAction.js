import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_LOADING,
} from './types';

export const setLoading = () => {
  return {
    type: SEND_MESSAGE_LOADING,
  };
};

export const sendContact = (value) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.post('/contact', value, config);
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
      type: SEND_MESSAGE,
      payload: data,
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
      type: SEND_MESSAGE_ERROR,
    });
  }
};
