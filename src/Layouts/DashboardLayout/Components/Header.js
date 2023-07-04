import React from 'react';
import Profile from '../Assets/Images/profile.svg';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import { logoutUser } from '../../../Redux/actions/authAction';


const Header = ({ showSidebar }) => {
  const decoded = jwt_decode(localStorage.getItem('authToken'));
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutUser())
  };

  return (
    <>
      {/* Topbar */}
      <nav className='navbar navbar-expand navbar-light bg-gradient-success topbar mb-4 static-top shadow'>
        {/* Sidebar Toggle (Topbar) */}
        <button
          onClick={showSidebar}
          className='btn btn-link d-md-none rounded-circle mr-3'
        >
          <i className='fa fa-bars' />
        </button>
        {/* Topbar Navbar */}
        <ul className='navbar-nav ml-auto'>
          {/* Divider */}
          <div className='topbar-divider d-none d-sm-block' />
          {/* Nav Item - User Information */}
          <li className='nav-item dropdown no-arrow'>
            <a
              className='nav-link dropdown-toggle'
              href='#!'
              id='userDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <span className='mr-2 d-none d-lg-inline text-white small'>
                {decoded.name}
              </span>
              <img
                className='img-profile rounded-pill'
                src={Profile}
                alt='profile'
              />
            </a>
            {/* Dropdown - User Information */}
            <div
              className='dropdown-menu dropdown-menu-right shadow animated--grow-in bg-gradient-success'
              aria-labelledby='userDropdown'
            >
              <a
                className='dropdown-item'
                href='#!'
                data-toggle='modal'
                data-target='#logoutModal'
              >
                <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400' />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
      {/* Logout Modal*/}
      <div
        className='modal fade'
        id='logoutModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Ready to Leave?
              </h5>
              <button
                className='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-secondary'
                type='button'
                data-dismiss='modal'
              >
                Cancel
              </button>
              <a className='btn btn-primary' onClick={logout} href='/'>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
