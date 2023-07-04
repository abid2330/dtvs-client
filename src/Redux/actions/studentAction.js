import {
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  ADD_STUDENT_ERROR,
  UPDATE_STUDENT_ERROR,
  DELETE_STUDENT_ERROR,
  STUDENT_LOADING,
  SHOW_STUDENT,
  SHOW_STUDENT_ERROR,
  SHOW_STUDENT_BY_ID,
  SHOW_STUDENT_BY_ID_ERROR,
} from './types';
import axiosInstance from '../../Utils';
import { toast } from 'react-toastify';

export const setLoading = () => {
  return {
    type: STUDENT_LOADING,
  };
};

export const showStudent = () => async (dispatch, getState) => {
  const userToken = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      '/dashboard/admin/getallstudent',
      config
    );

    dispatch({
      type: SHOW_STUDENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STUDENT_ERROR,
    });
  }
};

export const showStudentByID = (id) => async (dispatch, getState) => {
  const userToken = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      `/dashboard/admin/getallstudent/${id}`,
      config
    );

    dispatch({
      type: SHOW_STUDENT_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STUDENT_BY_ID_ERROR,
    });
  }
};

export const addStudent =
  (values, formikHelpers) => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.post(
        '/dashboard/admin/addstudent',
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
        type: ADD_STUDENT,
        payload: data,
      });
      dispatch(showStudent());
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
        type: ADD_STUDENT_ERROR,
      });
    }
  };

export const updateStudent =
  (values, id, navigate) => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userToken,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/dashboard/admin/updateuser/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_STUDENT,
        payload: data,
      });
      navigate('/app/manage-student');
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
        type: UPDATE_STUDENT_ERROR,
      });
    }
  };

export const deleteStudent = (id) => async (dispatch, getState) => {
  const userToken = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
  };
  try {
    await axiosInstance.delete(`/dashboard/admin/deleteuser/${id}`, config);
    dispatch({
      type: DELETE_STUDENT,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_STUDENT_ERROR,
    });
  }
};
