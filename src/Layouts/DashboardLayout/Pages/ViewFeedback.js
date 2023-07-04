import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewFeedback } from '../../../Redux/actions/viewFeedbackAction';

const Viewfeedback = () => {
  const dispatch = useDispatch();
  const { loading, feedback } = useSelector((state) => state.viewfeedback);
  //For Fetch Data
  useEffect(() => {
    dispatch(viewFeedback());
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
                <li className='breadcrumb-item active'>View Feedback</li>
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
                    Feedback Data
                  </h6>
                </div>
                <div className='card-body'>
                  <MaterialTable
                    title=''
                    columns={[
                      { title: 'Name', field: 'name' },
                      { title: 'Email', field: 'email' },
                      { title: 'Feedback', field: 'feedback' },
                    ]}
                    data={feedback}
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

export default Viewfeedback;
