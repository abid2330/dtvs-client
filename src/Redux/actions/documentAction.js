import axiosInstance from '../../Utils';
import { SHOW_DOCUMENTS, SHOW_DOCUMENT_ERROR } from './types';

export const showDocuments = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  try {
    const { data } = await axiosInstance.get(
      `/dashboard/showdocuments/${id}`,
      config
    ); 
    dispatch({
      type: SHOW_DOCUMENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DOCUMENT_ERROR,
    });
  }
};
