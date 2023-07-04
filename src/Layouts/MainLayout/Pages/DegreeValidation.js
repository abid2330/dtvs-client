import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../Assets/Images/logoa.png';
import {
  searchData,
  showSuccessDegree,
} from '../../../Redux/actions/degreeValidationAction';

const DegreeValidation = () => {
  const dispatch = useDispatch();
  const { visible, showapplication } = useSelector(
    (state) => state.successapplication
  );

  const clickHandler = async (e) => {
    e.preventDefault();
    dispatch(showSuccessDegree());
  };

  const ChangeValue = (e) => {
    const { value } = e.target;
    dispatch(searchData(value));
  };
  return (
    <div style={{ height: '100vh' }}>
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
      <div className='container-fluid my-5'>
        <h2 className='text-center mt-3 text-capitalize text-primary'>
          Enter ROLL NO / MIS ID / STUDENT ID to see the details of student
        </h2>
        <div className='row justify-content-center align-items-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='input-group my-3'>
              <input
                type='number'
                className='form-control'
                placeholder='Search By ROLL NO / MIS ID / STUDENT ID'
                aria-label="Recipient's username"
                aria-describedby='button-addon2'
                onChange={ChangeValue}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    clickHandler(e);
                  }
                }}
              />
              <button
                className='btn btn-primary'
                type='button'
                id='button-addon2'
                data-mdb-ripple-color='dark'
                onClick={clickHandler}
              >
                <i className='fa fa-search'></i>
              </button>
            </div>
            {visible === true && (
              <>
                {!showapplication ? (
                  <div
                    className='container-fluid'
                    style={{
                      width: '70%',
                      borderTop: '2px solid teal',
                      borderRight: '2px solid black',
                      borderLeft: '2px solid black',
                      borderBottom: '2px solid teal',
                    }}
                  >
                    <i className='fa fa-exclamation-triangle fa-3x text-danger d-flex justify-content-center mt-3'></i>
                    <h1 className='text-center text-danger'>Data Not Found</h1>
                  </div>
                ) : (
                  <div
                    className='container'
                    style={{
                      width: '70%',
                      borderTop: '2px solid teal',
                      borderRight: '2px solid black',
                      borderLeft: '2px solid black',
                      borderBottom: '2px solid teal',
                    }}
                  >
                    <div className='row container-fluid'>
                      <div className='col-md-4 mt-2'>
                        <img
                          src={logo}
                          alt='Logo'
                          height={120}
                          width={120}
                          className='ms-5'
                        />
                      </div>
                      <div className='col-md-4 mt-5'>
                        <h3 className='text-primary'>Student Details</h3>
                      </div>
                      <div className='col-md-4 my-2'>
                        {' '}
                        <img
                          className='rounded img-fluid ms-3'
                          src={`uploads/${showapplication.image}`}
                          alt='Avatar'
                          width={180}
                          style={{ border: '1px solid teal' }}
                        />
                      </div>
                      <div className='col-md-6 ms-5 mt-4'>
                        <h6>
                          Name:{' '}
                          <span className='text-primary'>
                            {showapplication.stdName}
                          </span>
                        </h6>
                        <h6>
                          Email:{' '}
                          <span className='text-primary'>
                            {showapplication.email}
                          </span>
                        </h6>
                        <h6>
                          Program:{' '}
                          <span className='text-primary'>
                            {showapplication.program}
                          </span>
                        </h6>
                        <h6>
                          Department:{' '}
                          <span className='text-primary'>
                            {showapplication.department}
                          </span>
                        </h6>
                        <h6>
                          Session:{' '}
                          <span className='text-primary'>
                            {showapplication.session}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DegreeValidation;
