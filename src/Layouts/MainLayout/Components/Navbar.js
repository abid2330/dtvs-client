import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/dashboardLogo.png';
import '../Assets/Styles/navbar.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
} from 'mdb-react-ui-kit';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const authenticate = localStorage.getItem('authToken');

  const guestLinks = (
    <>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          aria-current='page'
          to='/'
        >
          <i className='fa fa-home'></i> Home
        </NavLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          to='/degree-validation'
        >
          <i className='fa fa-graduation-cap'></i> Degree Validation
        </NavLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          to='/about-us'
        >
          <i className='fa fa-address-card'></i> About Us
        </NavLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          to='/contact-us'
        >
          <i className='fa fa-envelope'></i> Contact Us
        </NavLink>
      </MDBNavbarItem>
    </>
  );

  const userLinks = (
    <>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          aria-current='page'
          to='/'
        >
          <i className='fa fa-home'></i> Home
        </NavLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          to='/degree-validation'
        >
          <i className='fa fa-graduation-cap'></i> Degree Validation
        </NavLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-active nav-link' : 'nav-link'
          }
          style={{ color: 'white' }}
          to='/contact-us'
        >
          <i className='fa fa-envelope'></i> Contact Us
        </NavLink>
      </MDBNavbarItem>
    </>
  );
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='gradient-success'>
        <MDBContainer fluid>
        
          <NavLink className='nav-link mr-5' to='/'>
          
          { <img src={logo} alt='SiteLogo' height={50} width={60} />}
         
          
          </NavLink>
          
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav className='justify-content-end'>
              {authenticate ? userLinks : guestLinks}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
