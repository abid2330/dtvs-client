import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
      <div
        className='container-fluid bg-white py-5'
        style={{ height: '100vh' }}
      >
        {/* 404 Error Text */}
        <div className='text-center'>
          <div className='error mx-auto' data-text={404}>
            404
          </div>
          <p className='lead text-gray-800 mb-5'>Page Not Found</p>
          <p className='text-dark mb-0'>
            It looks like you found a glitch in the matrix...
          </p>
          <Link to='/'>← Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
