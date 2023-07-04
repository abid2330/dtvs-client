import { Field, Form, Formik } from 'formik';
import { object, string, ref } from 'yup';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import '../Assets/Styles/login.css';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../../Redux/actions/authAction';

const ChangePassword = () => {
  const initialValues = {
    password: '',
    cpassword: '',
  };
  const [visible, setVisible] = useState(false);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { resetToken } = useParams();
  const resetPassword = async (values) => {
    dispatch(changePassword(values, navigate, resetToken));
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
                  <div className='col-lg-6 d-none d-lg-block bg-change-password' />
                  <div className='col-lg-6 my-auto'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-2'>
                          Change Password
                        </h1>
                        <p className='mb-4'>
                          Enter you new password and change your password and
                          then you can login with your new password.
                        </p>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={resetPassword}
                        validationSchema={object({
                          password: string()
                            .required('Password is required!')
                            .matches(
                              /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                              'Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!'
                            ),
                          cpassword: string()
                            .oneOf(
                              [ref('password'), null],
                              'Password not match!'
                            )
                            .required('Confirm Password is required!'),
                        })}
                      >
                        {({ isValid, dirty }) => (
                          <Form
                            className='user'
                          >
                            <div className='form-group'>
                              <Field
                                type={visible === true ? 'text' : 'password'}
                                name='password'
                                className='form-control form-control-user'
                                placeholder='Enter New Password'
                                as='input'
                              />
                              <CErrormessage name='password' />
                            </div>
                            <div className='form-group'>
                              <Field
                                type={visible === true ? 'text' : 'password'}
                                name='cpassword'
                                className='form-control form-control-user'
                                placeholder='Enter Confirm Password'
                                as='input'
                              />
                              <CErrormessage name='cpassword' />
                            </div>
                            <div className='mb-2'>
                              <MDBCheckbox
                                name='flexCheck'
                                id='flexCheckDefault'
                                label='Show Password'
                                onClick={() => setVisible(!visible)}
                              />
                            </div>
                            {loading ? (
                              <button className='btn btn-primary btn-user btn-block mb-5 disabled'>
                                <i className='fa fa-spinner fa-spin'></i> Please
                                Wait...
                              </button>
                            ) : (
                              <button
                                type='submit'
                                className={
                                  !isValid || !dirty
                                    ? 'btn btn-primary btn-user btn-block mb-5 disabled'
                                    : 'btn btn-primary btn-user btn-block mb-5'
                                }
                              >
                                Change Password
                              </button>
                            )}
                          </Form>
                        )}
                      </Formik>
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

export default ChangePassword;
