import { ErrorMessage } from 'formik';
import React from 'react';

const CErrorMessage = ({ name }) => {
  return (
    <div style={{ color: 'red', fontSize: '12px', padding: '3px' }}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default CErrorMessage;
