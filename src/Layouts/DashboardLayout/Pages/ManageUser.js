import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AddUser, UploadFileCsv } from '../Components/AddModal';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../../../Redux/actions/userAction';

const ManageUser = () => {
const {loading,getusers}= useSelector((state)=>state.user)
const dispatch=useDispatch()

//For Fetch Data
useEffect(() => {
  dispatch(showUser())
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
                <li className='breadcrumb-item active'>Manage User</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12 mb-3'>
            <AddUser />
          </div>
          <div className='col-md-12'>
            <div className='container'>
              {/* DataTales Example */}
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    User Data
                  </h6>
                </div>
                <div className='card-body'>
                  <h1 className='h3 mb-2 text-gray-800'>Show All Users</h1>
                  <p className='mb-4'>
                    You can search and also update and delete User.
                  </p>
                  <UploadFileCsv />
                  <MaterialTable
                    title=''
                    columns={[
                      { title: 'Username', field: 'userid' },
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
                              <Link to={`/update/update-user/${rowData._id}`}>
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
                                    dispatch(deleteUser(rowData._id));
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
                    data={getusers}
                    isLoading={loading}
                    options={{
                      sorting: true,
                      actionsColumnIndex: -1,
                      selection: true,
                      headerStyle: {
                        backgroundColor: '#1cc286',
                      },
                    }}
                    actions={[
                      {
                        tooltip: 'Remove all selected users',
                        icon: 'delete',
                        onClick: (evt, data) => {
                          const confirmBox = window.confirm(
                            `Do you really want to delete ${data.length} rows`
                          );
                          data.map((userData) => {
                            if (confirmBox === true) {
                              dispatch(deleteUser(userData._id));
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

export default ManageUser;
