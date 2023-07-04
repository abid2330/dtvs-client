import React, { useState } from 'react';

const Upload = ({ image }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>
      <img
        src={preview}
        alt='preview' 
        className='rounded'
        style={{ 
          width: '200px',
          height: '200px',
          border: '1px solid teal',
          backgroundColor: '#d2ddff',
          objectFit:'cover'
        }}
      />
    </div>
  );
};

export default Upload;
