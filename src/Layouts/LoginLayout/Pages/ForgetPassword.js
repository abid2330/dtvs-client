import React from 'react';
import { Link } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import '../Assets/Styles/login.css';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../../Redux/actions/authAction';

const ForgetPassword = () => {
  const initialValues = {
    email: '',
  };
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const resetpass = async (values, formikHelpers) => {
    dispatch(forgetPassword(values, formikHelpers));
  };
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
      <div className='container' style={{ height: '100vh' }}>
        {/* Outer Row */}
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                {/* Nested Row within Card Body */}
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-block bg-password' />
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-2'>
                          Forgot Your Password?
                        </h1>
                        <p className='mb-4'>
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={resetpass}
                        onKeyPress={(e, values, formikHelpers) => {
                          if (e.key === 'Enter') {
                            resetpass(values, formikHelpers);
                          }
                        }}
                        validationSchema={object({
                          email: string()
                            .required('Email is required')
                            .email('Invalid Email'),
                        })}
                      >
                        {({ isValid, dirty }) => (
                          <Form className='user'>
                            <div className='form-group'>
                              <Field
                                type='email'
                                name='email'
                                className='form-control form-control-user'
                                id='exampleInputEmail'
                                aria-describedby='emailHelp'
                                placeholder='Enter Email Address...'
                                as='input'
                              />
                              <CErrormessage name='email' />
                            </div>
                            {loading ? (
                              <button className='btn btn-primary btn-user btn-block disabled'>
                                <i className='fa fa-spinner fa-spin'></i> Please
                                Wait...
                              </button>
                            ) : (
                              <button
                                className={
                                  !isValid || !dirty
                                    ? `btn btn-primary btn-user btn-block disabled`
                                    : `btn btn-primary btn-user btn-block`
                                }
                                type='submit'
                              >
                                Reset Password
                              </button>
                            )}
                          </Form>
                        )}
                      </Formik>
                      <hr />
                      <div className='text-center'>
                        <Link to='/login/app' className='small'>
                          Back To Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
