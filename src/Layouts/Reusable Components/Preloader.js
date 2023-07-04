import React from 'react';
import { Bars } from 'react-loader-spinner';

const Preloader = () => {
  return (
    <div className='d-flex justify-content-center' style={{marginTop:'20%', marginBottom:'20%'}}>
      <div>
        <div />
        <Bars color='#32865D' arialLabel='loading' />
        <div />
      </div>
    </div>
  );
};

export default Preloader;
