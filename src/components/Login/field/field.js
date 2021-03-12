import React from 'react';

const Field = function({ id, name, type, placeholder, action }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className='form-control'
      onClick={action}
    />
  );
};

export default Field;