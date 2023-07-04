import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AddStudent, UploadFileCsv } from '../Components/AddModal';
import { ToastContainer } from 'react-toastify';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteStudent,
  showStudent,
} from '../../../Redux/actions/studentAction';

const ManageStudent = () => {
  //For Fetch Data
  const studentData = useSelector((state) => {
    return {
      loading: state.student.loading,
      getstudents: state.student.getstudents,
    };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStudent());
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
                <li className='breadcrumb-item active'>Manage Student</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12 mb-3'>
            <AddStudent />
          </div>
          <div className='col-md-12'>
            <div className='container-fluid'>
              {/* DataTales Example */}
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Student Data
                  </h6>
                </div>
                <div className='card-body'>
                  {/* Page Heading */}
                  <h1 className='h3 mb-2 text-gray-800'>Show All Student</h1>
                  <p className='mb-4'>
                    You can search and also update and delete student.
                  </p>
                  <UploadFileCsv />
                  <MaterialTable
                    title=''
                    columns={[
                      { title: 'MIS ID', field: 'userid' },
                      { title: 'Name', field: 'name' },
                      { title: 'Email', field: 'email' },
                      { title: 'CNIC', field: 'cnic' },
                      { title: 'Role', field: 'role' },
                      {
                        title: 'Edit/Delete',
                        field: 'edit/delete',
                        render: (rowData) =>
                          rowData && (
                            <>
                              <Link
                                to={`/update/update-student/${rowData._id}`}
                              >
                                <IconButton color='primary'>
                                  <EditIcon />
                                </IconButton>
                              </Link>
                              <IconButton
                                color='secondary'
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    `Do you really want to delete ${rowData.name}`
                                  );
                                  if (confirmBox === true) {
                                    dispatch(deleteStudent(rowData._id));
                                    window.location.reload(true)
                                  } else {
                                    return null;
                                  }
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </>
                          ),
                      },
                    ]}
                    data={studentData.getstudents}
                    isLoading={studentData.loading}
                    options={{
                      selection: true,
                      actionsColumnIndex: -1,
                      headerStyle: {
                        backgroundColor: '#1cc286',
                      },
                    }}
                    actions={[
                      {
                        icon: 'delete',
                        Tooltip: 'Remove all selected students',
                        onClick: (evt, data) => {
                          const confirmBox = window.confirm(
                            `Do you really want to delete ${data.length} rows`
                          );
                          data.map((userData) => {
                            if (confirmBox === true) {
                              dispatch(deleteStudent(userData._id));
                              window.location.reload(true)
                            } else {
                              return null;
                            }
                          });
                        },
                      },
                    ]}
                  />
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

export default ManageStudent;
