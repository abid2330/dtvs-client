import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import {
  showStudentByID,
  updateStudent,
} from '../../../Redux/actions/studentAction';

const UpdateStudent = () => {
  const studentData = useSelector((state) => {
    return {
      loading: state.student.loading,
      showstudentbyid: state.student.studentbyid,
    };
  });
  
  const initialValues = {
    name: studentData.showstudentbyid.name,
    email: studentData.showstudentbyid.email,
    cnic: studentData.showstudentbyid.cnic,
    role: studentData.showstudentbyid.role,
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const updatestudent = async (values) => {
    dispatch(updateStudent(values, id, navigate));
  };

  useEffect(() => {
    dispatch(showStudentByID(id));
  }, []);

  return (
    <>
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='card shadow' style={{ width: '70vh' }}>
          <div className='card-header'>
            <h4 className='m-0 font-weight-bold text-primary'>
              Update Student
            </h4>
          </div>
          <div className='card-body'>
            <Formik
              initialValues={initialValues}
              onSubmit={updatestudent}
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
                    <option>Student</option>
                  </Field>
                  {studentData.loading === true ? (
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
                      Update Student
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

export default UpdateStudent;
