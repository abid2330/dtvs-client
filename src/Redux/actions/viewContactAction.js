import axiosInstance from '../../Utils';
import {
  SHOW_CONTACT,
  SHOW_CONTACT_ERROR,
  SHOW_CONTACT_LOADING,
} from './types';

export const setLoading = () => {
  return {
    type: SHOW_CONTACT_LOADING,
  };
};

export const viewContact = () => async (dispatch, getState) => {
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
      '/dashboard/admin/viewcontactus',
      config
    );
    dispatch({
      type: SHOW_CONTACT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CONTACT_ERROR,
    });
  }
};
