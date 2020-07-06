import React from 'react';
import './Equals.css';

const Equals = ({ children, elementId }) => {
  return (
    <div
      id={elementId}
      onClick={() => console.log('clicked equals')}
      className="Equals button"
    >
      {children}
    </div>
  );
};

export default Equals;
