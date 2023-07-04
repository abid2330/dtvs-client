import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import '../Assets/Styles/contactus.css';
import { sendContact } from '../../../Redux/actions/contactAction';
const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setContact((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactus);
  const sendMessage = async (e) => {
    e.preventDefault();
    dispatch(sendContact(contact));
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
      <section className='bg-light' style={{ height: '100vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center pt-2'>Get in Touch</h2>
              <p className='text-center'>
                You can contact us by using this form
              </p>
              <hr
                className='bg-success mb-4 mt-0 mx-auto'
                style={{ width: '100%', height: '4px' }}
              />
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='card mb-2'>
                          <div className='row mt-2'>
                            <div className='col-md-6'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13590.51205297226!2d71.0888031!3d31.6166512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3925d673afec5a7b%3A0x7fd011dcef7ef5c!2sThal%20University%20Bhakkar!5e0!3m2!1sen!2s!4v1687105095365!5m2!1sen!2s" 
                            
                                style={{ border: '0' }}
                                allowfullscreen=''
                                loading='lazy'
                                className='ms-3 mt-3 map'
                                title='Map'
                              ></iframe>
                            </div>
                            <div className='col-md-6'>
                              <div className='card mx-3 my-4'>
                                <div className='card-body card-setting'>
                                  <form
                                    method='post'
                                    onKeyPress={(e) => {
                                      if (e.key === 'Enter') {
                                        sendMessage(e);
                                      }
                                    }}
                                  >
                                    <MDBInput
                                      label='Name'
                                      type='text'
                                      className='mb-2'
                                      name='name'
                                      value={contact.name}
                                      onChange={changeValue}
                                    />
                                    <MDBInput
                                      label='Email'
                                      type='email'
                                      className='mb-2'
                                      name='email'
                                      value={contact.email}
                                      onChange={changeValue}
                                    />
                                    <MDBInput
                                      label='Message'
                                      textarea
                                      rows={4}
                                      className='mb-2'
                                      name='message'
                                      value={contact.message}
                                      onChange={changeValue}
                                    />
                                    {loading === true? (
                                      <div className='text-center'>
                                        <button
                                          onClick={sendMessage}
                                          className='btn btn-primary btn-block rounded-pill disabled'
                                        >
                                          <i className='fa fa-spin fa-spinner'></i>{' '}
                                          Please Wait...
                                        </button>
                                      </div>
                                    ) : (
                                      <div className='text-center'>
                                        <button
                                          onClick={sendMessage}
                                          className='btn btn-primary btn-block rounded-pill'
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    )}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 text-center'>
                    <h3>Address</h3>
                    <hr
                      className='bg-primary mb-4 mt-0 mx-auto'
                      style={{ width: '125px', height: '4px' }}
                    />
                    <i className='fa fa-location-arrow icon-setting mt-3'>
                      <span className='text-center'>
                      Thal University Bhakkar,
University Road
                      </span>
                    </i>
                    <br />
                    <i className='fa fa-phone icon-setting mt-3'>
                      <span className='text-center'> Tel: 051-1234567</span>
                    </i>
                    <br />
                    <i className='fa fa-envelope icon-setting mt-3'>
                      <span className='text-center'>
                        {' '}
                        info@tu.edu.pk
                      </span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
