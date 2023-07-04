import React from 'react';
import About from '../Assets/Images/about-us.jpg';
import '../Assets/Styles/about.css';
const AboutUs = () => {
  return (
    <>
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className="image-setting">
            <img
              src={About}
              alt='about-us'
              className='img-fluid mt-5 ms-3 rounded-pill shadow border border-black border-4'
            />
            </div>
          </div>
          <div className='col-md-6'>
          <div className="card card-setting shadow">
              <div className="card-body">
              <h1 className='text-center'>About Us</h1>
            <hr
              className='bg-primary mx-auto'
              style={{ height: '5px', width: '170px' }}
            />
            <p className='text-justify'>
              Degree tracking system will allow the students to track their
              degree and check the status of their application of degree. This
              will facilitate both the students and the university
              administration. In past the process of applying and receiving the
              degree was manual. That takes lot of time and many students have
              to come to university again and again to check the status of their
              degree .But this system will allow the students to check their
              degree status by sitting at home and they will have to just come
              for once to apply for the degree and then after all the process is
              done to collect the degree/ transcript. The administration will
              also be facilitated by this tracking system so that they will not
              have to face the rush of students every day. The system will also
              provide a better working environment for the administration to
              work in easy and effective way so that they will not have to face
              the rush of students every day. They can save time and work in
              more efficient way.
            </p>
              </div>
          </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
