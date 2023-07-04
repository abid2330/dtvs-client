import React from 'react';
import Steppers from 'react-stepper-horizontal';
import Check from '../Assets/Images/check.svg';
import Cross from '../Assets/Images/cross.svg';

const Stepper = ({ status }) => {
  return (
    <div>
      {!status ? (
        <h1 className='text-center text-danger'>
          You should first fill application form for degree then come here
        </h1>
      ) : status.status === 'Admin' ? (
        <>
          <Steppers
            steps={[{ title: 'Admin' }, { title: 'Fee Section' }]}
            activeStep={0}
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-primary text-white text-justify d-flex align-items-center justify-content-center'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Not Approved' ? (
        <>
          <Steppers
            steps={[
              { title: 'Not Approved', icon: Cross },
              { title: 'Fee Section' },
            ]}
            activeStep={0}
            activeColor='red'
            activeTitleColor='red'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-danger text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Approved' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section' },
              { title: 'Head Of Department' },
            ]}
            activeStep={1}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Due Fee' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Due Fee', icon: Cross },
              { title: 'Head Of Department' },
            ]}
            activeStep={1}
            activeColor='red'
            activeTitleColor='red'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-danger text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Library' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library' },
              { title: 'Incharge Campus' },
            ]}
            activeStep={3}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Book Not Returned' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Book not returned', icon: Cross },
              { title: 'Incharge Campus' },
            ]}
            activeStep={3}
            activeColor='red'
            activeTitleColor='red'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-danger text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Incharge Campus' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus' },
              { title: 'Examination Department' },
            ]}
            activeStep={4}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Issues' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Issue', icon: Cross },
              { title: 'Examination Department' },
            ]}
            activeStep={4}
            activeColor='red'
            activeTitleColor='red'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-danger text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Examination Department' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus', icon: Check },
              { title: 'Examination Department' },
              { title: 'Degree Printing' },
            ]}
            activeStep={5}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Issue' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus', icon: Check },
              { title: 'Issue', icon: Cross },
              { title: 'Degree Printing' },
            ]}
            activeStep={5}
            activeColor='red'
            activeTitleColor='red'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-danger text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Degree Printing' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus', icon: Check },
              { title: 'Examination Department', icon: Check },
              { title: 'Degree Printing' },
              { title: 'Degree Received' },
            ]}
            activeStep={6}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Degree Printed' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus', icon: Check },
              { title: 'Examination Department', icon: Check },
              { title: 'Degree Printed', icon: Check },
              { title: 'Degree Received' },
            ]}
            activeStep={7}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Degree Received' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department', icon: Check },
              { title: 'Library', icon: Check },
              { title: 'Incharge Campus', icon: Check },
              { title: 'Examination Department', icon: Check },
              { title: 'Degree Printed', icon: Check },
              { title: 'Degree Received', icon: Check },
            ]}
            activeStep={8}
            activeColor='green'
            activeTitleColor='green'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : status.status === 'Any Issue' ? (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Issue', icon: Cross },
              { title: 'Library' },
            ]}
            activeStep={2}
            activeColor='red'
            activeTitleColor='red'
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      ) : (
        <>
          <Steppers
            steps={[
              { title: 'Admin', icon: Check },
              { title: 'Fee Section', icon: Check },
              { title: 'Head Of Department' },
              { title: 'Library' },
            ]}
            activeStep={2}
            completeColor='green'
            completeTitleColor='green'
            size={40}
          />
          <div className='card shadow container-fluid m-3 text-center bg-success text-white text-justify'>
            <h4>{status.description}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Stepper;
