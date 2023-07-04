import { MDBInput } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import {
  showDepartmentByID,
  updateDepartment,
} from '../../../Redux/actions/departmentAction';

const UpdateDepartment = () => {
  const dispatch = useDispatch();
  const { loading, departmentbyid } = useSelector((state) => state.departments);

  const initialValues = {
    department: departmentbyid.department,
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const updatedepartment = async (values) => {
    dispatch(updateDepartment(values, navigate, id));
  };

  useEffect(() => {
    dispatch(showDepartmentByID(id));
  }, []);

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div>
          <div className='card shadow' style={{ width: '70vh' }}>
            <div className='card-header'>
              <h4 className='m-0 font-weight-bold text-primary'>
                Update Department
              </h4>
            </div>
            <div className='card-body'>
              <Formik
                initialValues={initialValues}
                onSubmit={updatedepartment}
                enableReinitialize
                validationSchema={object({
                  department: string()
                    .required('Department is required')
                    .matches(
                      /^(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                      "Please write first latter capital and don't write numbers!"
                    ),
                })}
              >
                {({ isValid, dirty }) => (
                  <Form>
                    <Field
                      name='department'
                      type='text'
                      label='Department'
                      as={MDBInput}
                    />
                    <CErrormessage name='department' />
                    {loading === true ? (
                      <button className='btn btn-primary disabled mt-1'>
                        <i className='fa fa-spin fa-spinner'></i> Please wait...
                      </button>
                    ) : (
                      <button
                        type='submit'
                        className={
                          !isValid || !dirty
                            ? 'btn btn-primary disabled mt-1'
                            : 'btn btn-primary mt-1'
                        }
                      >
                        Update Department
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDepartment;
