import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { showUserByID, updateUser } from '../../../Redux/actions/userAction';
import { showDepartment } from '../../../Redux/actions/departmentAction';

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { loading, userbyid } = useSelector((state) => state.user);
  const { getdepartments } = useSelector((state) => state.departments);

  const initialValues = {
    name: userbyid.name,
    email: userbyid.email,
    cnic: userbyid.cnic,
    role: userbyid.role,
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const updateuser = async (values) => {
    dispatch(updateUser(values, navigate, id));
  };

  useEffect(() => {
    dispatch(showUserByID(id));
  }, []);

  useEffect(() => {
    dispatch(showDepartment())
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
        <div className='card shadow' style={{ width: '70vh' }}>
          <div className='card-header'>
            <h4 className='m-0 font-weight-bold text-primary'>Update User</h4>
          </div>
          <div className='card-body'>
            <Formik
              initialValues={initialValues}
              onSubmit={updateuser}
              enableReinitialize
              validationSchema={object({
                name: string()
                  .matches(
                    /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                    'Name should have at least 3 characters and should not any number!'
                  )
                  .required('Name is required!'),
                email: string()
                  .required('Email is requird!')
                  .email('Invalid Email!'),
                cnic: string()
                  .required('CNIC is required!')
                  .matches(/^[0-9+]{13}$/, 'CNIC must be 13 characters'),
              })}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Field
                    name='name'
                    type='text'
                    label='Name'
                    className='mt-1'
                    as={MDBInput}
                  />
                  <CErrormessage name='name' />
                  <Field
                    name='email'
                    type='text'
                    label='Email'
                    className='mt-1'
                    as={MDBInput}
                  />
                  <CErrormessage name='email' />
                  <Field
                    name='cnic'
                    type='number'
                    label='Cnic'
                    className='mt-1'
                    as={MDBInput}
                  />
                  <CErrormessage name='cnic' />
                  <Field
                    name='role'
                    className='mt-1 form-control form-select'
                    as='select'
                  >
                    <option>Select Role</option>
                    <optgroup label='Head Of Department'>
                      {getdepartments.map((data) => (
                        <option>Head Of {data.department} Department</option>
                      ))}
                    </optgroup>
                    <optgroup label='Other Users'>
                      <option>Fee Section</option>
                      <option>Library</option>
                      <option>Incharge Campus</option>
                      <option>Examination Department</option>
                    </optgroup>
                  </Field>
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
                      Update User
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

export default UpdateUser;
