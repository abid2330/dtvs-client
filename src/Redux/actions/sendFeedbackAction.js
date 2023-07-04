import { SEND_FEEDBACK, SEND_FEEDBACK_ERROR, FEEDBACK_LOADING } from './types';
import axiosInstance from '../../Utils';
import { toast } from 'react-toastify';

export const setLoading = () => {
  return {
    type: FEEDBACK_LOADING,
  };
};

export const sendFeedback =
  (values, setfeedback) => async (dispatch, getState) => {
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
        '/dashboard/student/sendfeedback',
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
        type: SEND_FEEDBACK,
        payload: data,
      });
      setfeedback({
        feedback: '',
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
        type: SEND_FEEDBACK,
      });
    }
  };
