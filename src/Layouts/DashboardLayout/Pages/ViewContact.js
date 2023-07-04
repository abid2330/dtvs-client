import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { viewContact } from '../../../Redux/actions/viewContactAction';

const ViewContact = () => {
  const dispatch = useDispatch();
  const { loading, contact } = useSelector((state) => state.viewcontact);
  //For Fetch Data
  useEffect(() => {
    dispatch(viewContact());
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
                <li className='breadcrumb-item active'>View Contact Us</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12'>
            <div className='container-fluid'>
              {/* DataTales Example */}
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Contact Us Data
                  </h6>
                </div>
                <div className='card-body'>
                  <MaterialTable
                    title=''
                    columns={[
                      { title: 'Name', field: 'name' },
                      { title: 'Email', field: 'email' },
                      { title: 'Message', field: 'message' },
                    ]}
                    data={contact}
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

export default ViewContact;
