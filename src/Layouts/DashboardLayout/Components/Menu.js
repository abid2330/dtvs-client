import React, { useEffect, useState } from 'react';
import Logo from '../Assets/Images/dashboardLogo.png';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/menu.css';
import jwt_decode from 'jwt-decode';
import { loadUsers } from '../../../Redux/actions/authAction';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../../Utils';

const Menu = ({ sidebar }) => {
  const decoded = jwt_decode(localStorage.getItem('authToken'));
  const dispatch = useDispatch();
  const [notify, setNotify] = useState([]);
  const notification = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('authToken'),
      },
    };
    try {
      const { data } = await axiosInstance.get(
        '/dashboard/shownotification',
        config
      );
      setNotify(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    dispatch(loadUsers());
    notification();
  }, []);

  const AdminLinks = (
    <>
      {/* Nav Item - Dashboard */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/dashboard'
        >
          <i className='fas fa-fw fa-tachometer-alt' />
          <span>Dashboard</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Management</div>
      {/* Nav Item - Manage Students */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/manage-student'
        >
          <i className='fas fa-fw fa-id-card' />
          <span>Manage Students</span>
        </NavLink>
      </li>
      {/* Nav Item - Manage Users */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/manage-user'
        >
          <i className='fas fa-fw fa-users' />
          <span>Manage Users</span>
        </NavLink>
      </li>
      {/* Nav Item - Manage Department */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/manage-department'
        >
          <i className='fas fa-fw fa-university' />
          <span>Manage Departments</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Degree Managements</div>
      {/* Nav Item - Degree Application */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/degree-applications'
        >
          <i className='fas fa-fw fas fa-graduation-cap' />
          <span>Degree Applications</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>View Messages</div>
      {/* Nav Item - View Contact Us */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/view-contact'
        >
          <i className='fas fa-fw fas fas far fa-comments' />
          <span>View Contact Us</span>
        </NavLink>
      </li>
      {/* Nav Item - View Feedback */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/view-feedback'
        >
          <i className='fas fa-fw fas far fa-comment-dots' />
          <span>View Feedback</span>
        </NavLink>
      </li>
    </>
  );

  const StudentLinks = (
    <>
      {/* Nav Item - Dashboard */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/dashboard'
        >
          <i className='fas fa-fw fa-tachometer-alt' />
          <span>Dashboard</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Application</div>
      {/* Nav Item - Apply Application */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/apply-application'
        >
          <i className='fas fa-fw fas fas far fa-graduation-cap' />
          <span>Apply Application</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Nav Item - Download Fee Chalan */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/download-chalan'
        >
          <i className='fas fa-fw fas fas far fa-download' />
          <span>Download Fee Chalan</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Status</div>
      {/* Nav Item - View Status */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/view-status'
        >
          <i className='fas fa-fw fas fas far fa-chart-area' />
          <span>View Status</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Feedback</div>
      {/* Nav Item - Send Feedback */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/send-feedback'
        >
          <i className='fas fa-fw fas fas far fa-comments' />
          <span>Send Feedback</span>
        </NavLink>
      </li>
    </>
  );

  const UserLinks = (
    <>
      {/* Nav Item - Dashboard */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/dashboard'
        >
          <i className='fas fa-fw fa-tachometer-alt' />
          <span>Dashboard</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Application</div>
      {/* Nav Item - Applications */}
      <li className='nav-item'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-menu nav-link' : 'nav-link'
          }
          to='/app/applications'
        >
          <i className='fas fa-fw fas fas far fa-graduation-cap' />
          <span>Show Applications</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Sidebar */}
      <ul
        className={
          sidebar
            ? 'navbar-nav bg-gradient-success sidebar sidebar-dark accordion toggled shadow'
            : 'navbar-nav bg-gradient-success sidebar sidebar-dark accordion shadow'
        }
      >
        {/* Sidebar - Brand */}
        <img
          src={Logo}
          alt='logo'
          height='60'
          width='60'
          className='mx-auto img-fluid mt-5'
        />
        <a
          className='sidebar-brand d-flex align-items-center justify-content-center pb-5'
          href='/'
        >
          <h5>DTVS</h5>
        </a>
        {/* Divider */}
        <hr className='sidebar-divider my-0' />
        {decoded.role === 'Admin'
          ? AdminLinks
          : decoded.role === 'Student'
          ? StudentLinks
          : UserLinks}
      </ul>
      {/* End of Sidebar */}
    </>
  );
};

export default Menu;
