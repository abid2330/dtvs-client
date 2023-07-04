import React from 'react';

const PageNotFound = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center mt-4'>
          <div className='col-xl-6 col-md-6 mb-4'>
            <div className='card shadow mb-4'>
              <div className='card-body'>
                <div
                  className='container-fluid bg-white py-5'
                  style={{ marginTop: '90px', marginBottom: '90px' }}
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

export default PageNotFound;
