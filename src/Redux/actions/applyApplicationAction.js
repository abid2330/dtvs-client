import {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_ERROR,
  APPLY_APPLICATION_LOADING,
} from './types';
import axiosInstance from '../../Utils';
import { toast } from 'react-toastify';

export const setLoading = () => {
  return {
    type: APPLY_APPLICATION_LOADING,
  };
};

export const submitApplication =
  (values, formikHelpers) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };
    dispatch(setLoading());
    const confirmBox = window.confirm(
      "Are you read your detail carefully if yes then submit and if you don't read it carefully then read it carefully then submit it because this application is submitted only once."
    );
    if (confirmBox === true) {
      try {
        const { data } = await axiosInstance.post(
          '/dashboard/student/applyapplication',
          values,
          config
        );
        dispatch({
          type: SUBMIT_APPLICATION,
          payload: data,
        });
        toast.success(data.msg, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
          type: SUBMIT_APPLICATION_ERROR,
        });
      }
    }
  };
