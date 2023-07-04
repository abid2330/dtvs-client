import React, { useEffect, useState } from 'react';
import base64Mime from 'base64mime';
import { useParams } from 'react-router-dom';
import Preloader from '../../Reusable Components/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { showPaidChalan } from '../../../Redux/actions/feeChalanAction';

const ShowPaidChalan = () => {
 const dispatch=useDispatch()
 const {chalan_loading,show_paid_chalan}=useSelector((state)=>state.feechalan)
  const format = base64Mime(show_paid_chalan.paidChalan) === 'image/jpeg';
  

  const { id } = useParams();

  useEffect(() => {
    dispatch(showPaidChalan(id))
  }, []);
  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh',width:'100%'}}>
        {chalan_loading === true ? (
          <Preloader />
        ) : !show_paid_chalan? (
          <h4>No Image Available....</h4>
        ) : format ? (
          <embed
            src={show_paid_chalan.paidChalan}
            type='image/jpeg'
          />
        ) : (
          <embed
            src={show_paid_chalan.paidChalan}
            type='image/png'
          />
        )}
      </div>
    </>
  );
};

export default ShowPaidChalan;
