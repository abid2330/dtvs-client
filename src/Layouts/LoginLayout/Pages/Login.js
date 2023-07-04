import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/actions/authAction';

import '../Assets/Styles/login.css';
const Login = () => {
  const [login, setLogin] = useState({
    userid: '',
    password: '',
  });
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const authStates = useSelector((state) => {
    return {
      loading: state.auth.loading,
      isAuthenticated:state.auth.isAuthenticated
    };
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setLogin((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const loginForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(login));
  };
  const navigate=useNavigate()
  if(authStates.isAuthenticated){
    navigate('/app/dashboard')
  }

  
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
      <div className='container' style={{ height: '100vh' }}>
        {/* Outer Row */}
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                {/* Nested Row within Card Body */}
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-block bg-login' />
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                      </div>
                      <form
                        className='user'
                        method='post'
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            loginForm(e);
                          }
                        }}
                      >
                        <div className='form-group'>
                          <input
                            type='text'
                            name='userid'
                            value={login.userid}
                            onChange={changeValue}
                            className='form-control form-control-user'
                            placeholder='Enter Username Or Roll Num...'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type={visible === true ? 'text' : 'password'}
                            name='password'
                            value={login.password}
                            onChange={changeValue}
                            className='form-control form-control-user'
                            placeholder='Password'
                          />
                        </div>
                        <div className='mb-2'>
                          <MDBCheckbox
                            name='flexCheck'
                            id='flexCheckDefault'
                            label='Show Password'
                            onClick={() => setVisible(!visible)}
                          />
                        </div>
                        {authStates.loading ? (
                          <a
                            className='btn btn-primary btn-user btn-block disabled'
                            href='#!'
                          >
                            <i className='fa fa-spin fa-spinner'></i> Please
                            Wait...
                          </a>
                        ) : (
                          <a
                            onClick={loginForm}
                            className='btn btn-primary btn-user btn-block'
                            href='#!'
                          >
                            Login
                          </a>
                        )}
                      </form>
                      <hr />
                      <div className='text-center'>
                        <Link className='small' to='/login/forget-password'>
                          Forgot Password?
                        </Link>
                      </div>
                      <hr />
                      <div className='text-center'>
                        <Link className='small' to='/'>
                          Back To Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
