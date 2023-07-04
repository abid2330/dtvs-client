import { toast } from 'react-toastify';
import axiosInstance from '../../Utils';
import {
  SEARCH,
  SHOW_SUCCESS_APPLICATION,
  SHOW_SUCCESS_APPLICATION_ERROR,
} from './types';

export const showSuccessDegree = () => async (dispatch, getState) => {
  const search = getState().successapplication.search;
  if (search === '') {
    toast.error('Please Enter MIS ID...', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  try {
    const { data } = await axiosInstance.get(
      `/getsuccessdegreeapplication/${search}`
    );
    dispatch({
      type: SHOW_SUCCESS_APPLICATION,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_SUCCESS_APPLICATION_ERROR,
    });
  }
};

export const searchData = (value) => async (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: value,
  });
};
