import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Preloader from '../../Reusable Components/Preloader';
import { IconButton } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getApplicationID,
  showChalan,
} from '../../../Redux/actions/feeChalanAction';
const DownloadChalan = () => {
  const dispatch = useDispatch();
  const { chalan_loading, show_chalan, application_id } = useSelector(
    (state) => state.feechalan
  );
  useEffect(() => {
    dispatch(showChalan());
    dispatch(getApplicationID());
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
                <li className='breadcrumb-item active'>Downlaod Fee Chalan</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='container-fluid'>
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Downlaod Fee Chalan
                  </h6>
                </div>
                <div className='card-body'>
                  <div className='container'>
                    {chalan_loading ? (
                      <Preloader />
                    ) : (
                      <div className='container d-flex align-content-center justify-content-center'>
                        {!show_chalan ? (
                          <h1 className='text-danger'>
                          You should first fill application form for degree then come here
                          </h1>
                        ) : show_chalan.feeChalan === '' ? (
                          <>
                            <div
                              className='bg-gradient-success rounded d-flex align-items-center justify-content-center'
                              style={{
                                borderRadius: 20,
                                maxWidth: '24rem',
                              }}
                            >
                              <h3 className='text-center text-white d-flex align-items-center justify-content-center'>
                                Your fee chalan is not uploaded yet please check
                                it later.
                              </h3>
                            </div>
                          </>
                        ) : (
                          <div>
                            <img
                              src={show_chalan.feeChalan}
                              className='img-fluid rounded mt-5'
                              alt='feechalan'
                              style={{
                                borderRadius: 20,
                                maxWidth: '24rem',
                              }}
                            />
                            <div className='mt-2 d-flex align-items-center justify-content-center'>
                              <h4>
                                Upload your paid chalan form{' '}
                                <span className='font-weight-bold'>&rarr;</span>
                                <span>
                                  <IconButton>
                                    <Link
                                      to={`/update/upload-paid-chalan/${application_id._id}`}
                                    >
                                      <CloudUpload />
                                    </Link>
                                  </IconButton>{' '}
                                </span>
                              </h4>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className='card-footer'>
                  {!show_chalan
                    ? null
                    : show_chalan.feeChalan !== '' && (
                        <div className='d-flex justify-content-center align-content-center'>
                          <a
                            href={show_chalan.feeChalan}
                            download='Fee Chalan'
                            className='btn btn-primary mt-3 btn-lg'
                            style={{ width: 500 }}
                          >
                            Download
                          </a>
                        </div>
                      )}
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

export default DownloadChalan;
