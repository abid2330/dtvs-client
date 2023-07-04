import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Uploads from '../Components/Upload';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import CErrormessage from '../../Reusable Components/CErrorMessage';
import { showDepartment } from '../../../Redux/actions/departmentAction';
import { submitApplication } from '../../../Redux/actions/applyApplicationAction';

const ApplyApplication = () => {
  const dispatch = useDispatch();
  const { apply_application_loading } = useSelector(
    (state) => state.applyapplication
  );
  const { getdepartments } = useSelector((state) => state.departments);
  const initialValues = {
    fatherName: '',
    enrollmentNo: '',
    department: '',
    program: '',
    section: '',
    shift: '',
    address: '',
    phoneNo: '',
    session: '',
    documents: '',
    image: null,
  };

  const submit_Application = async (values, formikHelpers) => {
    const formData = new FormData();
    formData.append('enrollmentNo', values.enrollmentNo);
    formData.append('fatherName', values.fatherName);
    formData.append('shift', values.shift);
    formData.append('phoneNo', values.phoneNo);
    formData.append('department', values.department);
    formData.append('documents', values.documents);
    formData.append('image', values.image);
    formData.append('section', values.section);
    formData.append('address', values.address);
    formData.append('program', values.program);
    formData.append('session', values.session);
    dispatch(submitApplication(formData, formikHelpers));
  };

  useEffect(() => {
    dispatch(showDepartment());
  }, []);

  const imageref = useRef();

  const [pdferror, setPdferror] = useState('');
  const [imgerror, setImgerror] = useState('');
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

      {/* Begin Page Content */}
      <div className='container-fluid'>
        {/* Page Heading */}
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <div className='container-fluid'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <NavLink to='/app/dashboard'>Dashboard</NavLink>
                </li>
                <li className='breadcrumb-item active'>Apply Application</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12' style={{ width: '150vh' }}>
            <div className='container-fluid'>
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Apply Application
                  </h6>
                </div>
                <div className='card-body'>
                  <p className='font-weight-bold'>
                    <span className='text-danger font-weight-bold me-1'>
                      Note:
                    </span>
                    Before submitting your application read the following
                    instruction carefully. You can submit your application only
                    once so check your details once before submitting your
                    application:
                    <ol>
                      <li>Enrollment/Registration Card(Photocopy)</li>
                      <li>Admit Card(Attested Photocopy)</li>
                      <li>Identity Card(شناختی کارڈ)(Attested Photocopy)</li>
                      <li>Detail Mark Sheet(Attested Photocopy)</li>
                      <li>Matriculation Certificate Photocopy(Mandatory)</li>
                      <li>
                        Pay order on the name of Head of Examination Department
                      </li>
                      <li>Clearance Certificate just for regular students</li>
                      <li>
                        GRMC(Approved Letter) For M.S, M.PHIL, PHD Degree{' '}
                      </li>
                    </ol>
                    <pre>
                      How to upload the above document?
                      <br />
                      <span className='text-primary'>
                        {' '}
                        Step 1: Capture pictures of all above documents.
                      </span>
                      <br />
                      <span className='text-primary'>
                        {' '}
                        Step 2: Make a pdf of all pictures.
                      </span>
                      <br />
                      <span className='text-primary'>
                        {' '}
                        Step 3: Upload this pdf below.
                      </span>
                      <br />
                    </pre>
                    After uploading these documents at the end you have to
                    upload your passport size photo and submit your application.
                  </p>
                  <hr />
                  <Formik
                    initialValues={initialValues}
                    onSubmit={submit_Application}
                    validationSchema={object({
                      fatherName: string()
                        .matches(
                          /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                          'Name should have at least 3 characters and should not any number and First letter must be capital!'
                        )
                        .required('Father Name is required!'),
                      enrollmentNo: string().required(
                        'Enrollment No. is required!'
                      ),
                      program: string().required('Program is required!'),
                      section: string()
                        .required('Section is required!')
                        .matches(
                          /^[A-Z]{1}$/,
                          'Section should be only one capital letter!'
                        ),
                      address: string().required('Address is required!'),
                      phoneNo: string()
                        .required('Phone No. is required')
                        .matches(/^[0-9]{11}$/, 'Invalid phone number!'),
                      session: string()
                        .required('Session is required!')
                        .matches(
                          /^(Fall )[0-9]{4,30}|(Spring )[0-9]{4,30}|(Autumn )[0-9]{4,30}$/,
                          'You should enter only Fall Year or Spring Year or Autumn Year eg: Fall 2012!'
                        ),
                      documents: string().required('PDF document is required!'),
                      shift: string().required('Shift is required!'),
                      department: string().required('Department is required'),
                      image: string().nullable().required('Image is required'),
                    })}
                  >
                    {({ isValid, dirty, setFieldValue, values, setValues }) => (
                      <Form encType='multipart/form-data'>
                        <Field
                          name='fatherName'
                          type='text'
                          label='Father Name'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='fatherName' />
                        <Field
                          name='enrollmentNo'
                          type='text'
                          label='Enrollment No.'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='enrollmentNo' />
                        <Field
                          name='program'
                          type='text'
                          label='Program'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='program' />
                        <Field
                          name='section'
                          type='text'
                          label='Section'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='section' />
                        <Field
                          name='phoneNo'
                          type='text'
                          label='Phone No.'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='phoneNo' />
                        <Field
                          name='session'
                          type='text'
                          label='Session'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='session' />
                        <Field
                          name='address'
                          textarea
                          label='Address'
                          className='mt-1'
                          as={MDBInput}
                        />
                        <CErrormessage name='address' />
                        <Field
                          name='department'
                          className='mt-1 form-select form-control'
                          as='select'
                        >
                          <option>Select Department</option>
                          {getdepartments.map((data, index) => (
                            <option key={index}>{data.department}</option>
                          ))}
                        </Field>
                        <CErrormessage name='department' />
                        <Field
                          name='shift'
                          className='mt-1 form-control form-select'
                          as='select'
                        >
                          <option>Select Shift</option>
                          <option>Morning</option>
                          <option>Evening</option>
                        </Field>
                        <CErrormessage name='shift' />
                        <div className='text-center text-primary'>
                          <h5>Upload Above Mention Documents</h5>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                          <>
                            <div>
                              <input
                                type='file'
                                accept='application/pdf'
                                className='form-control'
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file && file.type === 'application/pdf') {
                                    setPdferror('');
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = () => {
                                      setValues({
                                        ...values,
                                        documents: reader.result,
                                      });
                                    };
                                  } else {
                                    setPdferror('Please select pdf file!');
                                  }
                                }}
                              />
                              {pdferror && (
                                <div
                                  style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    padding: '3px',
                                  }}
                                >
                                  {pdferror}
                                </div>
                              )}
                              <CErrormessage name='documents' />
                            </div>
                          </>
                        </div>

                        <div className='text-center mt-2 text-primary'>
                          <h5>Upload Your Picture</h5>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                          {values.image ? ( 
                            <>
                              <Uploads image={values.image} />
                            </>
                          ) : (
                            <>
                              <input
                                type='file'
                                accept='image/*'
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (
                                    file &&
                                    file.type.substr(0, 5) === 'image'
                                  ) {
                                    setFieldValue('image', file);
                                  } else {
                                    setImgerror('Please enter image file!');
                                  }
                                }}
                                hidden
                                ref={imageref}
                              />
                              <div>
                                <button
                                  className='add-image rounded '
                                  style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '1px solid teal',
                                    backgroundColor: '#d2ddff',
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    imageref.current.click();
                                  }}
                                >
                                  <i className='fa fa-plus me-1'></i>Add Image
                                </button>
                                {imgerror ? (
                                  <div
                                    style={{
                                      color: 'red',
                                      fontSize: '12px',
                                      padding: '3px',
                                    }}
                                  >
                                    {imgerror}
                                  </div>
                                ) : (
                                  <CErrormessage name='image' />
                                )}
                              </div>
                            </>
                          )}
                        </div>
                        {apply_application_loading === true ? (
                          <button className='btn btn-primary btn-block disabled mt-2'>
                            <i className='fa fa-spin fa-spinner'></i> Please
                            Wait...
                          </button>
                        ) : (
                          <button
                            type='submit'
                            className={
                              !isValid || !dirty
                                ? 'btn btn-primary btn-block disabled mt-2'
                                : 'btn btn-primary btn-block mt-2'
                            }
                          >
                            Submit Application
                          </button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyApplication;
