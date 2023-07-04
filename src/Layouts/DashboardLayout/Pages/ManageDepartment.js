import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AddDepartment } from '../Components/AddModal';
import { toast, ToastContainer } from 'react-toastify';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import axiosInstence from '../../../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartment, showDepartment } from '../../../Redux/actions/departmentAction';
 
const ManageDepartment = () => {
const dispatch=useDispatch()
const {loading,getdepartments}=useSelector((state)=>state.departments)
  //For Fetch Data
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
                <li className='breadcrumb-item active'>Manage Department</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12 mb-3'>
            <AddDepartment/>
          </div>
          <div className='col-md-12'>
            <div className='container-fluid'>
              {/* DataTales Example */}
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Department Data
                  </h6>
                </div>
                <div className='card-body'>
                  {/* Page Heading */}
                  <h1 className='h3 mb-2 text-gray-800'>
                    Show All Departments
                  </h1>
                  <p className='mb-4'>
                    You can search and also update and delete department.
                  </p>
                  <MaterialTable
                    title=''
                    columns={[
                      { title: 'Department', field: 'department' },
                      {
                        title: 'Edit/Delete',
                        field: 'edit/delete',
                        render: (rowData) =>
                          rowData && (
                            <>
                              <Link to={`/update/update-department/${rowData._id}`}>
                                <IconButton color='primary'>
                                  <EditIcon />
                                </IconButton>
                              </Link>
                              <IconButton
                                color='secondary'
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    `Do you really want to delete ${rowData.department}`
                                  );
                                  if (confirmBox === true) {
                                    dispatch(deleteDepartment(rowData._id));
                                    window.location.href =
                                      '/app/manage-department';
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
                    data={getdepartments}
                    isLoading={loading}
                    options={{
                      actionsColumnIndex: -1,
                      exportButton: true,
                      headerStyle: {
                        backgroundColor: '#1cc286',
                      },
                    }}
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

export default ManageDepartment;
