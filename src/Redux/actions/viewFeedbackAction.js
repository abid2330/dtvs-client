import {
  SHOW_FEEDBACK,
  SHOW_FEEDBACK_ERROR,
  SHOW_FEEDBACK_LOADING,
} from './types';
import axiosInstance from '../../Utils';

export const setLoading = () => {
  return {
    type: SHOW_FEEDBACK_LOADING,
  };
};

export const viewFeedback = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };

  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get('/dashboard/admin/viewfeedback', config);
    dispatch({
      type: SHOW_FEEDBACK,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_FEEDBACK_ERROR,
    });
  }
};
