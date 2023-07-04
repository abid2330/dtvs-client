import React, { useEffect } from 'react';
import Profileimage from '../Assets/Images/profile.svg';
import { Link } from 'react-router-dom';
import Preloader from '../../Reusable Components/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { showApplication } from '../../../Redux/actions/degreeApplicationAction';
import {
  appliedPhysicsCount,
  businessCount,
  chemistryCount,
  commerceCount,
  csCount,
  islamiatCount,
  lawCount,
  physicsCount,
  economicCount,
  electricalCount,
  englishCount,
  mechanicalCount,
  mathCount,
  urduCount,
  softwareCount,
  internationalCount,
  feeSectionCount,
  libraryCount,
  inchargeCampusCount,
  examCount,
} from '../../../Redux/actions/countAction';

const Dashboard = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => {
    return {
      loading: state.auth.loading,
      user: state.auth.user,
    };
  });
  const { degree } = useSelector((state) => state.degreeapplication);
  const {
    chemistry_count,
    commerce_count,
    law_count,
    islamiat_count,
    physics_count,
    applied_physics_count,
    cs_count,
    business_count,
    economics_count,
    electrical_count,
    english_count,
    mechanical_count,
    mathematics_count,
    urdu_count,
    software_count,
    international_relations_count,
    fee_section_count,
    library_count,
    incharge_campus_count,
    examination_count,
  } = useSelector((state) => state.countapplication);

  useEffect(() => {
    if (auth.user.role === 'Admin') {
      dispatch(showApplication());
    }
    if (auth.user.role === 'Head Of Chemistry Department') {
      dispatch(chemistryCount());
    }
    if (auth.user.role === 'Head Of Commerce Department') {
      dispatch(commerceCount());
    }
    if (auth.user.role === 'Head Of Law Department') {
      dispatch(lawCount());
    }
    if (auth.user.role === 'Head Of Islamiat Department') {
      dispatch(islamiatCount());
    }
    if (auth.user.role === 'Head Of Physics Department') {
      dispatch(physicsCount());
    }
    if (auth.user.role === 'Head Of Applied Physics Department') {
      dispatch(appliedPhysicsCount());
    }
    if (auth.user.role === 'Head Of Computer Science Department') {
      dispatch(csCount());
    }
    if (auth.user.role === 'Head Of Business Department') {
      dispatch(businessCount());
    }
    if (auth.user.role === 'Head Of Economics Department') {
      dispatch(economicCount());
    }
    if (auth.user.role === 'Head Of Electrical Engineering Department') {
      dispatch(electricalCount());
    }
    if (auth.user.role === 'Head Of English Department') {
      dispatch(englishCount());
    }
    if (auth.user.role === 'Head Of Mechanical Engineering Department') {
      dispatch(mechanicalCount());
    }
    if (auth.user.role === 'Head Of Mathematics Department') {
      dispatch(mathCount());
    }
    if (auth.user.role === 'Head Of Urdu Department') {
      dispatch(urduCount());
    }
    if (auth.user.role === 'Head Of Software Engineering Department') {
      dispatch(softwareCount());
    }
    if (auth.user.role === 'Head Of International Relations Department') {
      dispatch(internationalCount());
    }
    if (auth.user.role === 'Fee Section') {
      dispatch(feeSectionCount());
    }
    if (auth.user.role === 'Library') {
      dispatch(libraryCount());
    }
    if (auth.user.role === 'Incharge Campus') {
      dispatch(inchargeCampusCount());
    }
    if (auth.user.role === 'Examination Department') {
      dispatch(examCount());
    }
  }, [auth.user.role]);

  const adminDashboard = (
    <>
      {/* Content Row */}
      <div className='row align-items-center justify-content-center mt-4'>
        <div className='col-xl-6 col-md-6 mb-4'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Your Profile
              </h6>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    src={Profileimage}
                    alt='profile'
                    className='img-fluid img-rounded'
                  />
                </div>
                <div className='col-md-8'>
                  <h4 className='font-weight-bold'>
                    Username:{' '}
                    <span className='font-weight-light'>
                      {auth.user.userid}
                    </span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Name:{' '}
                    <span className='font-weight-light'>{auth.user.name}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Email:{' '}
                    <span className='font-weight-light'>{auth.user.email}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    CNIC:{' '}
                    <span className='font-weight-light'>{auth.user.cnic}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <Link
                    to={`/update/update-password/${auth.user._id}`}
                    className='btn btn-primary'
                  >
                    <i className='fa fa-lock'></i> Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-md-6 mb-4'>
          <div className='card border-left-primary shadow h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                    Applied Applications
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    {degree.length}
                  </div>
                </div>
                <div className='col-auto'>
                  <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const studentDashboard = (
    <>
      {/* Content Row */}
      <div className='row mt-4'>
        <div className='col-md-12 d-flex align-items-center justify-content-center'>
          <div className='card shadow mb-4' style={{ width: '90ch' }}>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Your Profile
              </h6>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    src={Profileimage}
                    alt='profile'
                    className='img-fluid img-rounded'
                  />
                </div>
                <div className='col-md-8'>
                  <h4 className='font-weight-bold'>
                    MIS ID:{' '}
                    <span className='font-weight-light'>
                      {auth.user.userid}
                    </span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Name:{' '}
                    <span className='font-weight-light'>{auth.user.name}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Email:{' '}
                    <span className='font-weight-light'>{auth.user.email}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    CNIC:{' '}
                    <span className='font-weight-light'>{auth.user.cnic}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <Link
                    to={`/update/update-password/${auth.user._id}`}
                    className='btn btn-primary'
                  >
                    <i className='fa fa-lock'></i> Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const userDashboard = (
    <>
      {/* Content Row */}
      <div className='row align-items-center justify-content-center mt-4'>
        <div className='col-xl-7 col-md-6 mb-4'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Your Profile
              </h6>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    src={Profileimage}
                    alt='profile'
                    className='img-fluid img-rounded'
                  />
                </div>
                <div className='col-md-8'>
                  <h4 className='font-weight-bold'>
                    Username:{' '}
                    <span className='font-weight-light'>
                      {auth.user.userid}
                    </span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Name:{' '}
                    <span className='font-weight-light'>{auth.user.name}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    Email:{' '}
                    <span className='font-weight-light'>{auth.user.email}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <h4 className='font-weight-bold'>
                    CNIC:{' '}
                    <span className='font-weight-light'>{auth.user.cnic}</span>
                  </h4>
                  <hr
                    className='bg-gradient-success'
                    style={{ height: '7px', width: '100%' }}
                  />
                  <Link
                    to={`/update/update-password/${auth.user._id}`}
                    className='btn btn-primary'
                  >
                    <i className='fa fa-lock'></i> Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {auth.user.role === 'Fee Section' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {fee_section_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Library' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {library_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Incharge Campus' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {incharge_campus_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Examination Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {examination_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}{' '}
        {auth.user.role === 'Head Of Computer Science Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {cs_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}{' '}
        {auth.user.role === 'Head Of Urdu Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {urdu_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Islamiat Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {islamiat_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Law Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {law_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Economics Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {economics_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Business Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {business_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Commerce Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {commerce_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Applied Physics Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {applied_physics_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Electrical Engineering Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {electrical_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Mathematics Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {mathematics_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Software Engineering Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {software_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of International Relations Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {international_relations_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of English Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {english_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Physics Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {physics_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Chemistry Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {chemistry_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {auth.user.role === 'Head Of Mechanical Engineering Department' && (
          <>
            <div className='col-xl-5 col-md-6 mb-4'>
              <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                  <div className='row no-gutters align-items-center'>
                    <div className='col mr-2'>
                      <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                        Applications
                      </div>
                      <div className='h5 mb-0 font-weight-bold text-gray-800'>
                        {mechanical_count}
                      </div>
                    </div>
                    <div className='col-auto'>
                      <i className='fas fa-graduation-cap fa-2x text-gray-300' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
  return (
    <>
      {/* Begin Page Content */}
      <div className='container-fluid'>
        {/* Page Heading */}
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <div className='container-fluid'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item active'>Dashboard</li>
              </ol>
            </nav>
          </div>
        </nav>
        {auth.loading === true ? (
          <Preloader />
        ) : auth.user.role === 'Admin' ? (
          adminDashboard
        ) : auth.user.role === 'Student' ? (
          studentDashboard
        ) : (
          userDashboard
        )}
      </div>
      {/*  /container-fluid */}
      {/* End of Main Content */}
    </>
  );
};

export default Dashboard;
