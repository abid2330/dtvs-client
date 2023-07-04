import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Uploadfile from 'react-file-base64';
import { uploadChalan } from '../../../Redux/actions/feeChalanAction';
import { useDispatch,useSelector } from "react-redux";
const UploadChalan = () => {
  const dispatch = useDispatch();
  const { chalan_loading } = useSelector((state) => state.feechalan);
  const [feeChalan, setFeechalan] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const updateChalan = async (e) => {
    e.preventDefault();
    dispatch(uploadChalan(feeChalan, navigate, id));
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
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='card shadow' style={{ width: '70vh' }}>
          <div className='card-header'>
            <h4 className='m-0 font-weight-bold text-primary'>Upload Chalan</h4>
          </div>
          <div className='card-body'>
            <form method='POST'>
              <div>
                <Uploadfile
                  type='file'
                  multiple={false}
                  onDone={({ base64 }) =>
                    setFeechalan({ ...feeChalan, feeChalan: base64 })
                  }
                />
              </div>

              {chalan_loading ? (
                <button className='btn btn-primary disabled mt-3'>
                  <i className='fa fa-spinner fa-spin'></i> Please Wait...
                </button>
              ) : (
                <button className='btn btn-primary mt-3' onClick={updateChalan}>
                  Upload chalan
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadChalan;
