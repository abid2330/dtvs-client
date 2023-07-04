import { MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { updatePassword } from '../../../Redux/actions/updatePasswordAction';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const { pass_loading } = useSelector((state) => state.updatepass);

  const initialValues = {
    password: '',
    cpassword: '',
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const changePassword = async (values) => {
    dispatch(updatePassword(values, navigate, id));
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
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='card shadow' style={{ width: '70vh' }}>
          <div className='card-header'>
            <h4 className='m-0 font-weight-bold text-primary'>
              Change Password
            </h4>
          </div>
          <div className='card-body'>
            <Formik
              initialValues={initialValues}
              onSubmit={changePassword}
              validationSchema={object({
                password: string()
                  .required('Password is required!')
                  .matches(
                    /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                    'Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!'
                  ),
                cpassword: string()
                  .oneOf([ref('password'), null], 'Password not match!')
                  .required('Confirm Password is required!'),
              })}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Field
                    name='password'
                    type={visible === true ? 'text' : 'password'}
                    label='Password'
                    as={MDBInput}
                  />
                  <CErrormessage name='password' />
                  <Field
                    name='cpassword'
                    type={visible === true ? 'text' : 'password'}
                    label='Confirm Password'
                    className='mt-1'
                    as={MDBInput}
                  />
                  <CErrormessage name='cpassword' />
                  <MDBCheckbox
                    name='flexCheck'
                    id='flexCheckDefault'
                    label='Show Password'
                    onClick={() => setVisible(!visible)}
                  />
                  {pass_loading === true ? (
                    <button className='btn btn-primary disabled'>
                      <i className='fa fa-spin fa-spinner'></i> Please Wait...
                    </button>
                  ) : (
                    <button
                      className={
                        !isValid || !dirty
                          ? 'btn btn-primary disabled'
                          : 'btn btn-primary'
                      }
                      type='submit'
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
    </>
  );
};

export default UpdatePassword;
