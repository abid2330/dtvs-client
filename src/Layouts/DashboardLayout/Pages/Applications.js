import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MaterialTable from 'material-table';
import { CloudUpload, Edit, PictureAsPdf, Image } from '@material-ui/icons';
import Preloader from '../../Reusable Components/Preloader';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  appliedPhysicsApplication,
  businessApplication,
  chemistryApplication,
  commerceApplication,
  csApplication,
  economicApplication,
  electricalApplication,
  englishApplication,
  examApplication,
  feeSectionApplication,
  inchargeCampusApplication,
  internationalApplication,
  islamiatApplication,
  lawApplication,
  libraryApplication,
  mathApplication,
  mechanicalApplication,
  physicsApplication,
  softwareApplication,
  urduApplication,
} from '../../../Redux/actions/applicationsAction';

const Applications = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const {
    application_loading,
    chemistry_applications,
    commerce_applications,
    law_applications,
    islamiat_applications,
    physics_applications,
    applied_physics_applications,
    cs_applications,
    business_applications,
    economics_applications,
    electrical_applications,
    english_applications,
    mechanical_applications,
    mathematics_applications,
    urdu_applications,
    software_applications,
    international_relations_applications,
    fee_section_applications,
    library_applications,
    incharge_campus_applications,
    examination_applications,
  } = useSelector((state) => state.applications);
  useEffect(() => {
    if (user.role === 'Head Of Chemistry Department') {
      dispatch(chemistryApplication());
    }
    if (user.role === 'Head Of Commerce Department') {
      dispatch(commerceApplication());
    }
    if (user.role === 'Head Of Law Department') {
      dispatch(lawApplication());
    }
    if (user.role === 'Incharge Campus') {
      dispatch(inchargeCampusApplication());
    }
    if (user.role === 'Library') {
      dispatch(libraryApplication());
    }
    if (user.role === 'Fee Section') {
      dispatch(feeSectionApplication());
    }
    if (user.role === 'Head Of International Relations Department') {
      dispatch(internationalApplication());
    }
    if (user.role === 'Head Of Software Engineering Department') {
      dispatch(softwareApplication());
    }
    if (user.role === 'Head Of Urdu Department') {
      dispatch(urduApplication());
    }
    if (user.role === 'Head Of Mathematics Department') {
      dispatch(mathApplication());
    }
    if (user.role === 'Head Of Mechanical Engineering Department') {
      dispatch(mechanicalApplication());
    }
    if (user.role === 'Head Of English Department') {
      dispatch(englishApplication());
    }
    if (user.role === 'Head Of Electrical Engineering Department') {
      dispatch(electricalApplication());
    }
    if (user.role === 'Head Of Economics Department') {
      dispatch(economicApplication());
    }
    if (user.role === 'Head Of Business Department') {
      dispatch(businessApplication());
    }
    if (user.role === 'Head Of Computer Science Department') {
      dispatch(csApplication());
    }
    if (user.role === 'Head Of Applied Physics Department') {
      dispatch(appliedPhysicsApplication());
    }
    if (user.role === 'Head Of Physics Department') {
      dispatch(physicsApplication());
    }
    if (user.role === 'Head Of Islamiat Department') {
      dispatch(islamiatApplication());
    }
    if (user.role === 'Examination Department') {
      dispatch(examApplication());
    }
  }, [user.role]);

  return (
    <>
      {/* Begin Page Content */}
      <div className='container-fluid'>
        {/* Page Heading */}
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <div className='container-fluid'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
                <li className='breadcrumb-item active'>Degree Application</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'></div>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Degree Application
            </h6>
          </div>
          <div className='card-body'>
            {loading === true ? (
              <Preloader />
            ) : user.role === 'Fee Section' ? (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Session', field: 'session' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Address', field: 'address' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Upload Chalan/Documents',
                    field: 'upload chalan/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/upload-chalan/${rowData._id}`}>
                            <IconButton color='primary'>
                              <CloudUpload />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                  {
                    title: 'Show Paid Chalan/Update Status',
                    field: 'show paid shalan/update status',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/show-paid-chalan/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Image />
                            </IconButton>
                          </Link>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={fee_section_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            ) : user.role === 'Library' ? (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Session', field: 'session' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={library_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            ) : user.role === 'Incharge Campus' ? (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Session', field: 'session' },
                  { title: 'Address', field: 'address' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={incharge_campus_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            ) : user.role === 'Examination Department' ? (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Session', field: 'session' },
                  { title: 'Address', field: 'address' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  { title: 'Status', field: 'status' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={examination_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            ) : user.role === 'Admin' ? (
              (window.location.href = '/app/pagenotfound')
            ) : user.role === 'Student' ? (
              (window.location.href = '/app/pagenotfound')
            ) : (
              user.role === 'Head Of Computer Science Department' && (
                <MaterialTable
                  title=''
                  columns={[
                    { title: 'MIS ID/ ROLL NO', field: 'misid' },
                    { title: 'Enrollment No.', field: 'enrollmentNo' },
                    { title: 'Student Name', field: 'stdName' },
                    { title: 'Father Name', field: 'fatherName' },
                    { title: 'Email', field: 'email' },
                    { title: 'Department', field: 'department' },
                    { title: 'Program', field: 'program' },
                    { title: 'Section', field: 'section' },
                    { title: 'Session', field: 'session' },
                    { title: 'Shift', field: 'shift' },
                    { title: 'Date', field: 'date' },
                    {
                      title: 'Update Status/Documents',
                      field: 'update status/documents',
                      render: (rowData) =>
                        rowData && (
                          <>
                            <Link to={`/update/update-status/${rowData._id}`}>
                              <IconButton color='primary'>
                                <Edit />
                              </IconButton>
                            </Link>
                            <Link to={`/update/show-documents/${rowData._id}`}>
                              <IconButton>
                                <PictureAsPdf />
                              </IconButton>
                            </Link>
                          </>
                        ),
                    },
                  ]}
                  data={cs_applications}
                  isLoading={application_loading}
                  options={{
                    actionsColumnIndex: -1,
                    exportButton: true,
                    headerStyle: {
                      backgroundColor: '#1cc286',
                    },
                  }}
                />
              )
            )}
            {user.role === 'Head Of Urdu Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={urdu_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Islamiat Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={islamiat_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Law Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={law_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Economics Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={economics_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Business Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={business_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Commerce Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={commerce_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Applied Physics Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={applied_physics_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Electrical Engineering Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={electrical_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Mathematics Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={mathematics_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Software Engineering Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={software_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of International Relations Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={international_relations_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of English Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={english_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Physics Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={physics_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Chemistry Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={chemistry_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
            {user.role === 'Head Of Mechanical Engineering Department' && (
              <MaterialTable
                title=''
                columns={[
                  { title: 'MIS ID / ROLL NO', field: 'misid' },
                  { title: 'Enrollment No.', field: 'enrollmentNo' },
                  { title: 'Student Name', field: 'stdName' },
                  { title: 'Father Name', field: 'fatherName' },
                  { title: 'Email', field: 'email' },
                  { title: 'Department', field: 'department' },
                  { title: 'Program', field: 'program' },
                  { title: 'Section', field: 'section' },
                  { title: 'Shift', field: 'shift' },
                  { title: 'Date', field: 'date' },
                  {
                    title: 'Update Status/Documents',
                    field: 'update status/documents',
                    render: (rowData) =>
                      rowData && (
                        <>
                          <Link to={`/update/update-status/${rowData._id}`}>
                            <IconButton color='primary'>
                              <Edit />
                            </IconButton>
                          </Link>
                          <Link to={`/update/show-documents/${rowData._id}`}>
                            <IconButton color='primary'>
                              <PictureAsPdf />
                            </IconButton>
                          </Link>
                        </>
                      ),
                  },
                ]}
                data={mechanical_applications}
                isLoading={application_loading}
                options={{
                  actionsColumnIndex: -1,
                  exportButton: true,
                  headerStyle: {
                    backgroundColor: '#1cc286',
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </>
  );
};

export default Applications;
