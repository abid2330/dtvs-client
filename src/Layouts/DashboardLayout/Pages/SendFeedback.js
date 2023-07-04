import { MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { sendFeedback } from '../../../Redux/actions/sendFeedbackAction';
const SendFeedback = () => {
  const dispatch = useDispatch();
  const loading=useSelector((state)=>state.sendfeedback.feedback_loading)
  const [sendfeedback, setfeedback] = useState({
    feedback: '',
  });
  const changeValue = (e) => {
    const { name, value } = e.target;
    setfeedback((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const Feedback = async (e) => {
    e.preventDefault();
    dispatch(sendFeedback(sendfeedback, setfeedback));
  };
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

      {/* Begin Page Content */}
      <div className='container-fluid'>
        {/* Page Heading */}
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <div className='container-fluid'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
                <li className='breadcrumb-item active'>Send Feedback</li>
              </ol>
            </nav>
          </div>
        </nav>
        {/* Content Row */}
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12'>
            <div className='container-fluid'>
              {/* Page Heading */}
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Send Feedback
                  </h6>
                </div>
                <div className='card-body'>
                  <form method='POST'>
                    <MDBInput
                      label='Feedback'
                      textarea
                      name='feedback'
                      value={sendfeedback.feedback}
                      onChange={changeValue}
                    />
                    <hr />
                    {loading ? (
                      <button className='btn btn-primary rounded disabled'>
                        <i className='fa fa-spinner fa-spin'></i> Please Wait...
                      </button>
                    ) : (
                      <button
                        className='btn btn-primary rounded'
                        onClick={Feedback}
                      >
                        Send Feedback
                      </button>
                    )}
                  </form>
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

export default SendFeedback;
