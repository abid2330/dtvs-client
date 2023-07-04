import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MaterialTable from 'material-table';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import Edit from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteApplication,
  showApplication,
} from '../../../Redux/actions/degreeApplicationAction';

const DegreeApplications = () => {
  const dispatch = useDispatch();
  const { loading, degree } = useSelector((state) => state.degreeapplication);
  //For Fetch Data
  useEffect(() => {
    dispatch(showApplication());
  }, []);
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
                  <NavLink to='/app/dashboard'>Dashboard</NavLink>
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
                { title: 'Shift', field: 'shift' },
                { title: 'Address', field: 'address' },
                { title: 'Phone No.', field: 'phoneNo' },
                { title: 'Date', field: 'date' },
                { title: 'Status', field: 'status' },
                {
                  title: 'Delete/Documents',
                  field: 'delete/documents',
                  render: (rowData) =>
                    rowData && (
                      <>
                        <IconButton
                          color='secondary'
                          onClick={() => {
                            const confirmBox = window.confirm(
                              `Do you really want to delete ${rowData.stdName}`
                            );
                            if (confirmBox === true) {
                              dispatch(deleteApplication(rowData._id));
                              window.location.href = '/app/degree-applications';
                            } else {
                              return null;
                            }
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <Link to={`/update/show-documents/${rowData._id}`}>
                          <IconButton color='inherit'>
                            <PictureAsPdf />
                          </IconButton>
                        </Link>
                      </>
                    ),
                },
                {
                  title: 'Update Status',
                  field: 'update status',
                  render: (rowData) =>
                    rowData && (
                      <>
                        <Link to={`/update/update-status/${rowData._id}`}>
                          <IconButton color='primary'>
                            <Edit />
                          </IconButton>
                        </Link>
                      </>
                    ),
                },
              ]}
              data={degree}
              isLoading={loading}
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
                      console.log(userData._id);
                      if (confirmBox === true) {
                        dispatch(deleteApplication(userData._id));
                        window.location.reload(true);
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
    </>
  );
};

export default DegreeApplications;
