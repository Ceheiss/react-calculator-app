import React from 'react';
import './Number.css';

const Number = ({ children, elementId }) => {
  return (
    <div
      id={elementId}
      onClick={() => console.log('clicked number')}
      className="Number button"
    >
      {children}
    </div>
  );
};

export default Number;
