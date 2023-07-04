import { MDBInput } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showDepartment } from '../../../Redux/actions/departmentAction';
import { updateStatus } from '../../../Redux/actions/statusAction';

const UpdateStatus = () => {
  const dispatch = useDispatch();
  const { status_loading } = useSelector((state) => state.status);
  const { user } = useSelector((state) => state.auth);
  const { getdepartments } = useSelector((state) => state.departments);
  const [updatestatus, setUpdatestatus] = useState({
    description: '',
    status: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const changeValue = (e) => {
    const { name, value } = e.target;
    setUpdatestatus((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const updateData = async (e) => {
    e.preventDefault();
    dispatch(updateStatus(updatestatus, navigate, id, user));
  };

  useEffect(() => {
    dispatch(showDepartment());
  }, []);
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
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='card shadow' style={{ width: '70vh' }}>
          <div className='card-header'>
            <h4 className='m-0 font-weight-bold text-primary'>Update Status</h4>
          </div>
          <div className='card-body'>
            <form method='POST'>
              <MDBInput
                label='Description'
                textarea
                name='description'
                className='mb-3'
                value={updatestatus.description}
                onChange={changeValue}
              />

              {user.role === 'Admin' ? (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue} 
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    <option>Approved</option>
                    <option>Not Approved</option>
                  </select>
                </>
              ) : user.role === 'Fee Section' ? (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue}
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    {getdepartments.map((data) => (
                      <option>Head Of {data.department} Department</option>
                    ))}
                    <option>Due Fee</option>
                  </select>
                </>
              ) : user.role === 'Library' ? (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue}
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    <option>Incharge Campus</option>
                    <option>Book Not Returned</option>
                  </select>
                </>
              ) : user.role === 'Incharge Campus' ? (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue}
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    <option>Examination Department</option>
                    <option>Issues</option>
                  </select>
                </>
              ) : user.role === 'Examination Department' ? (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue}
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    <option>Degree Printing</option>
                    <option>Degree Printed</option>
                    <option>Degree Received</option>
                    <option>Issue</option>
                  </select>
                </>
              ) : (
                <>
                  <select
                    className='mb-3 form-select'
                    name='status'
                    onChange={changeValue}
                    value={updatestatus.status}
                  >
                    <option>Select Status</option>
                    <option>Library</option>
                    <option>Any Issue</option>
                  </select>
                </>
              )}
              {status_loading === true ? (
                <button className='btn btn-primary disabled'>
                  <i className='fa fa-spin fa-spinner'></i> Please Wait...
                </button>
              ) : (
                <button className='btn btn-primary' onClick={updateData}>
                  Update Status
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateStatus;
