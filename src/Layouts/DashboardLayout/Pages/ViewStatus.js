import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Stepper from '../Components/Stepper';
import Preloader from '../../Reusable Components/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { showStatus } from '../../../Redux/actions/statusAction';

const ViewStatus = () => {
  const dispatch = useDispatch();
  const { status_loading, show_status } = useSelector((state) => state.status);
  useEffect(() => {
    dispatch(showStatus());
  }, []);
  return (
    <>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <div className='container-fluid'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <NavLink to='/app/dashboard'>Dashboard</NavLink>
                </li>
                <li className='breadcrumb-item active'>Status</li>
              </ol>
            </nav>
          </div>
        </nav>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-12'>
            <div className='container-fluid'>
              <div className='card shadow mb-4 mx-auto'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>Status</h6>
                </div>
                <div className='card-body'>
                  {status_loading ? (
                    <Preloader />
                  ) : (
                    <Stepper status={show_status} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStatus;
