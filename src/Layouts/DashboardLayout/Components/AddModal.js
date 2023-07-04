import React, { useEffect, useState } from 'react';
import { MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstence from '../../../Utils';
import { Formik, Form, Field } from 'formik';
import { object, string, number, ref } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { addStudent } from '../../../Redux/actions/studentAction';
import { addUser } from '../../../Redux/actions/userAction';
import {
  addDepartment,
  showDepartment,
} from '../../../Redux/actions/departmentAction';
import { setUploadCsv, uploadCSV } from '../../../Redux/actions/uploadcsvAction';

export const AddStudent = () => {
  const initialValues = {
    userid: '',
    name: '',
    email: '',
    cnic: '',
    password: '',
    cpassword: '',
    role: '',
  };

  //Check Visibility Of Password
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.student.loading);
  const AddStudents = (values, formikHelpers) => {
    dispatch(addStudent(values, formikHelpers));
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
      {/* Button trigger modal */}
      <button
        type='button'
        className='btn btn-primary rounded'
        data-mdb-toggle='modal'
        data-mdb-target='#staticBackdrop'
      >
        <i className='fa fa-plus'></i> Add Student
      </button>
      {/* Modal */}
      <div
        className='modal fade'
        id='staticBackdrop'
        data-mdb-backdrop='static'
        data-mdb-keyboard='false'
        tabIndex={-1}
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdrop'>
                Add Student
              </h5>
              <button
                type='button'
                className='btn-close'
                data-mdb-dismiss='modal'
              />
            </div>
            <div className='modal-body'>
              <Formik
                initialValues={initialValues}
                onSubmit={AddStudents}
                validationSchema={object({
                  userid: number()
                    .required('MIS ID / ROLL NO is required!')
                    .positive('Please enter only positive numbers!')
                    .integer('Please enter only integers!'),
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
                  password: string()
                    .required('Password is required!')
                    .matches(
                      /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                      'Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!'
                    ),
                  cpassword: string()
                    .oneOf([ref('password'), null], 'Password not match!')
                    .required('Confirm Password is required!'),
                  role: string().required('Role is required!'),
                })}
              >
                {({ isValid, dirty }) => (
                  <Form
                    onKeyPress={(e, values, formikHelpers) => {
                      if (!isValid || !dirty) {
                        return null;
                      } else {
                        if (e.key === 'Enter') {
                          AddStudents(values, formikHelpers);
                        }
                      }
                    }}
                  >
                    <Field
                      name='userid'
                      type='number'
                      as={MDBInput}
                      label='MIS ID / ROLL NO'
                      className='mt-1'
                    />
                    <CErrormessage name='userid' />
                    <Field
                      name='name'
                      type='text'
                      as={MDBInput}
                      label='Name'
                      className='mt-1'
                    />
                    <CErrormessage name='name' />
                    <Field
                      name='email'
                      type='email'
                      as={MDBInput}
                      label='Email'
                      className='mt-1'
                    />
                    <CErrormessage name='email' />
                    <Field
                      name='cnic'
                      type='number'
                      as={MDBInput}
                      label='CNIC'
                      className='mt-1'
                    />
                    <CErrormessage name='cnic' />
                    <Field
                      name='password'
                      type={visible === true ? 'text' : 'password'}
                      as={MDBInput}
                      label='Password'
                      className='mt-1'
                    />
                    <CErrormessage name='password' />
                    <Field
                      name='cpassword'
                      type={visible === true ? 'text' : 'password'}
                      as={MDBInput}
                      label='Confirm Password'
                      className='mt-1'
                    />
                    <CErrormessage name='cpassword' />
                    <MDBCheckbox
                      name='flexCheck'
                      id='flexCheckDefault'
                      label='Show Password'
                      onClick={() => setVisible(!visible)}
                    />
                    <Field
                      name='role'
                      as='select'
                      className='mt-1 form-select form-control'
                    >
                      <option>Select Role</option>
                      <option value='Student'>Student</option>
                    </Field>
                    <CErrormessage name='role' />
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-mdb-dismiss='modal'
                      >
                        Close
                      </button>
                      {loading === true ? (
                        <button className='btn btn-primary disabled' disabled>
                          <i className='fa fa-spin fa-spinner me-1'></i> Please
                          Wait...
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
                          Add Student
                        </button>
                      )}
                    </div>
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

export const AddUser = () => {
  //Check Visibility Of Password
  const [visible, setVisible] = useState(false);

  //ADD User
  const initialValues = {
    userid: '',
    name: '',
    email: '',
    cnic: '',
    password: '',
    cpassword: '',
    role: '',
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const { getdepartments } = useSelector((state) => state.departments);

  const AddUsers = async (values, formikHelpers) => {
    dispatch(addUser(values, formikHelpers));
  };

  //Fetch Departments
  useEffect(() => {
    dispatch(showDepartment());
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
      <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-primary rounded'
          data-mdb-toggle='modal'
          data-mdb-target='#staticBackdrop'
        >
          <i className='fa fa-plus'></i> Add User
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='staticBackdrop'
          data-mdb-backdrop='static'
          data-mdb-keyboard='false'
          tabIndex={-1}
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdrop'>
                  Add User
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-mdb-dismiss='modal'
                />
              </div>
              <div className='modal-body'>
                <Formik
                  initialValues={initialValues}
                  onSubmit={AddUsers}
                  validationSchema={object({
                    userid: string()
                      .required('Username is required!')
                      .matches(
                        /^(?=.{3,20}$)(?![_.0-9])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$/,
                        "Username should be 3-16 characters and shouldn't include any special character and don't use capital letters!"
                      ),
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
                    password: string()
                      .required('Password is required!')
                      .matches(
                        /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                        'Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!'
                      ),
                    cpassword: string()
                      .oneOf([ref('password'), null], 'Password not match!')
                      .required('Confirm Password is required!'),
                    role: string().required('Role is required!'),
                  })}
                >
                  {({ isValid, dirty }) => (
                    <Form
                      onKeyPress={(e, values, formikHelpers) => {
                        if (!isValid || !dirty) {
                          return null;
                        } else {
                          if (e.key === 'Enter') {
                            AddUsers(values, formikHelpers);
                          }
                        }
                      }}
                    >
                      <Field
                        name='userid'
                        type='text'
                        as={MDBInput}
                        label='Username'
                        className='mt-1'
                      />
                      <CErrormessage name='userid' />
                      <Field
                        name='name'
                        type='text'
                        as={MDBInput}
                        label='Name'
                        className='mt-1'
                      />
                      <CErrormessage name='name' />
                      <Field
                        name='email'
                        type='email'
                        as={MDBInput}
                        label='Email'
                        className='mt-1'
                      />
                      <CErrormessage name='email' />
                      <Field
                        name='cnic'
                        type='number'
                        as={MDBInput}
                        label='CNIC'
                        className='mt-1'
                      />
                      <CErrormessage name='cnic' />
                      <Field
                        name='password'
                        type={visible === true ? 'text' : 'password'}
                        as={MDBInput}
                        label='Password'
                        className='mt-1'
                      />
                      <CErrormessage name='password' />
                      <Field
                        name='cpassword'
                        type={visible === true ? 'text' : 'password'}
                        as={MDBInput}
                        label='Confirm Password'
                        className='mt-1'
                      />
                      <CErrormessage name='cpassword' />
                      <MDBCheckbox
                        name='flexCheck'
                        id='flexCheckDefault'
                        label='Show Password'
                        onClick={() => setVisible(!visible)}
                      />
                      <Field
                        name='role'
                        as='select'
                        className='mt-1 form-select form-control'
                      >
                        <option>Select Role</option>
                        <optgroup label='Head Of Department'>
                          {getdepartments.map((data) => (
                            <option>
                              Head Of {data.department} Department
                            </option>
                          ))} 
                        </optgroup>
                        <optgroup label='Other Users'>
                          <option>Fee Section</option>
                          <option>Library</option>
                          <option>Incharge Campus</option>
                          <option>Examination Department</option>
                        </optgroup>
                      </Field>
                      <CErrormessage name='role' />
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-danger'
                          data-mdb-dismiss='modal'
                        >
                          Close
                        </button>
                        {loading === true ? (
                          <button className='btn btn-primary disabled'>
                            <i className='fa fa-spin fa-spinner me-1'></i>{' '}
                            Please Wait...
                          </button>
                        ) : (
                          <button
                            type='submit'
                            className={
                              !isValid || !dirty
                                ? 'btn btn-primary disabled'
                                : 'btn btn-primary'
                            }
                          >
                            Add User
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AddDepartment = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.departments);
  const initialValues = {
    department: '',
  };

  const AddDepartments = async (values, formikHelpers) => {
    dispatch(addDepartment(values, formikHelpers));
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
      <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-primary rounded'
          data-mdb-toggle='modal'
          data-mdb-target='#staticBackdrop'
        >
          <i className='fa fa-plus'></i> Add Department
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='staticBackdrop'
          data-mdb-backdrop='static'
          data-mdb-keyboard='false'
          tabIndex={-1}
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdrop'>
                  Add Department
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-mdb-dismiss='modal'
                />
              </div>
              <div className='modal-body'>
                <Formik
                  initialValues={initialValues}
                  onSubmit={AddDepartments}
                  validationSchema={object({
                    department: string()
                      .required('Department is required')
                      .matches(
                        /^(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                        'Please write first latter capital!'
                      ),
                  })}
                >
                  {({ isValid, dirty }) => (
                    <Form>
                      <Field
                        name='department'
                        type='text'
                        label='Department'
                        autoComplete='off'
                        as={MDBInput}
                      />
                      <CErrormessage name='department' />
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-danger'
                          data-mdb-dismiss='modal'
                        >
                          Close
                        </button>
                        {loading === true ? (
                          <button className='btn btn-primary disabled'>
                            <i className='fa fa-spin fa-spinner'></i> Add
                            Department
                          </button>
                        ) : (
                          <button
                            type='submit'
                            className={
                              !isValid || !dirty
                                ? 'btn btn-primary disabled'
                                : 'btn btn-primary'
                            }
                          >
                            Add Department
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const UploadFileCsv = () => {
  const dispatch=useDispatch()
  const {loading,uploadcsv} = useSelector((state)=>state.uploadcsvfile)
  const upload = (e) => {
    dispatch(setUploadCsv(e))
  };

  const clickHandler = async () => {
    const formData = new FormData();
    formData.append('csv', uploadcsv);
    dispatch(uploadCSV(formData))
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
      <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-primary rounded btn-sm mb-4'
          data-mdb-toggle='modal'
          data-mdb-target='#staticBackdrop1'
        >
          <i className='fa fa-upload'></i> Upload CSV File
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='staticBackdrop1'
          data-mdb-backdrop='static'
          data-mdb-keyboard='false'
          tabIndex={-1}
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdrop'>
                  Upload CSV File
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-mdb-dismiss='modal'
                />
              </div>

              <div className='modal-body'>
                <input
                  type='file'
                  className='form-control mb-4'
                  onChange={(e) => upload(e)}
                />
                {loading ? (
                  <button className='disabled btn btn-primary'>
                    <i className='fa fa-spinner fa-spin'></i> Please Wait...
                  </button>
                ) : (
                  <button
                    onClick={() => clickHandler()}
                    className='btn btn-primary'
                  >
                    Upload File
                  </button>
                )}
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-mdb-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
