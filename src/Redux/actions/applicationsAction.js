import {
  SHOW_CHEMISTRY_DEPARTMENT,
  SHOW_CHEMISTRY_DEPARTMENT_ERROR,
  SHOW_COMMERCE_DEPARTMENT,
  SHOW_COMMERCE_DEPARTMENT_ERROR,
  SHOW_LAW_DEPARTMENT,
  SHOW_LAW_DEPARTMENT_ERROR,
  SHOW_ISLAMIAT_DEPARTMENT,
  SHOW_ISLAMIAT_DEPARTMENT_ERROR,
  SHOW_PHYSICS_DEPARTMENT,
  SHOW_PHYSICS_DEPARTMENT_ERROR,
  SHOW_APPLIED_PHYSICS_DEPARTMENT,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR,
  SHOW_CS_DEPARTMENT,
  SHOW_CS_DEPARTMENT_ERROR,
  SHOW_BUSINESS_DEPARTMENT,
  SHOW_BUSINESS_DEPARTMENT_ERROR,
  SHOW_ECONOMICS_DEPARTMENT,
  SHOW_ECONOMICS_DEPARTMENT_ERROR,
  SHOW_ELECTRICAL_DEPARTMENT,
  SHOW_ELECTRICAL_DEPARTMENT_ERROR,
  SHOW_ENGLISH_DEPARTMENT,
  SHOW_ENGLISH_DEPARTMENT_ERROR,
  SHOW_MECHANICAL_DEPARTMENT,
  SHOW_MECHANICAL_DEPARTMENT_ERROR,
  SHOW_MATHEMATICS_DEPARTMENT,
  SHOW_MATHEMATICS_DEPARTMENT_ERROR,
  SHOW_URDU_DEPARTMENT,
  SHOW_URDU_DEPARTMENT_ERROR,
  SHOW_SOFTWARE_DEPARTMENT,
  SHOW_SOFTWARE_DEPARTMENT_ERROR,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR,
  SHOW_FEE_SECTION,
  SHOW_FEE_SECTION_ERROR,
  SHOW_LIBRARY,
  SHOW_LIBRARY_ERROR,
  SHOW_INCHARGE_CAMPUS,
  SHOW_INCHARGE_CAMPUS_ERROR,
  SHOW_EXAMINATION_DEPARTMENT,
  SHOW_EXAMINATION_DEPARTMENT_ERROR,
  APPLICATION_LOADING,
} from './types';
import axiosInstance from '../../Utils';

export const setLoading = () => {
  return {
    type: APPLICATION_LOADING,
  };
};

//Chemistry Application
export const chemistryApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/chemdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT_ERROR,
    });
  }
};

//Commerce Application
export const commerceApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/comdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT_ERROR,
    });
  }
};

//Law Application
export const lawApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/lawdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_LAW_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LAW_DEPARTMENT_ERROR,
    });
  }
};

//Islamiat Application
export const islamiatApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/isldepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT_ERROR,
    });
  }
};

//Physics Application
export const physicsApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/phydepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT_ERROR,
    });
  }
};

//Applied Physics Application
export const appliedPhysicsApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/apdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_APPLIED_PHYSICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR,
    });
  }
};

//Computer Science Application
export const csApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/csdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_CS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CS_DEPARTMENT_ERROR,
    });
  }
};

//Business Application
export const businessApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/bsdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT_ERROR,
    });
  }
};

//Economics Application
export const economicApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/ecdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT_ERROR,
    });
  }
};

//Electrical Application
export const electricalApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/eedepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT_ERROR,
    });
  }
};

//English Application
export const englishApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/engdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT_ERROR,
    });
  }
};

//Mechanical Application
export const mechanicalApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/medepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT_ERROR,
    });
  }
};

//Math Application
export const mathApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/mathdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT_ERROR,
    });
  }
};

//Urdu Application
export const urduApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/urdudepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_URDU_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_URDU_DEPARTMENT_ERROR,
    });
  }
};

//Software Application
export const softwareApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/sedepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT_ERROR,
    });
  }
};

//International Relation Application
export const internationalApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/irdepartmentapplication',
      config
    );
    dispatch({
      type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR,
    });
  }
};

//Fee Section Application
export const feeSectionApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/feesection',
      config
    );
    dispatch({
      type: SHOW_FEE_SECTION,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_FEE_SECTION_ERROR,
    });
  }
};

//Library Application
export const libraryApplication = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get('/dashboard/user/library', config);
    dispatch({
      type: SHOW_LIBRARY,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LIBRARY_ERROR,
    });
  }
};

//Examination Application
export const examApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/examination',
      config
    );
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT_ERROR,
    });
  }
};

//Incharge Application
export const inchargeCampusApplication = () => async (dispatch, getState) => {
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
      '/dashboard/user/inchargecampus',
      config
    );
    dispatch({
      type: SHOW_INCHARGE_CAMPUS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_INCHARGE_CAMPUS_ERROR,
    });
  }
};
