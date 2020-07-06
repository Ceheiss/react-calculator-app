import React from 'react';
import './Operator.css';

const Operator = ({ children, elementId }) => {
  return (
    <div
      id={elementId}
      onClick={() => console.log('clicked operator')}
      className="Operator button"
    >
      {children}
    </div>
  );
};

export default Operator;
