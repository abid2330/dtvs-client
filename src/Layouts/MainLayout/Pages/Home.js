import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Styles/home.css';

const Home = () => {
  const auth = localStorage.getItem('authToken');
  return (
    <>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>
              {' '}
              <i className='fa fa-graduation-cap'></i> DTVS
            </h1>
            <p className='lead text-center'>
              Degree tracking system will allow the students to track their
              <br />
              degree and check the status of their application of degree.
            </p>
            {!auth ? (
              <div className='row d-flex justify-content-between'>
                <Link to='/login/app' className='btn btn-primary'>
                  <i className='fa fa-sign-in-alt'></i> Login
                </Link>
              </div>
            ) : (
              <div className='row d-flex justify-content-between'>
                <Link to='/app/dashboard' className='btn btn-primary'>
                  <i className='fa fa-tachometer-alt'></i> Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
