import React from 'react';
import './Clear.css';

const Clear = ({ children, elementId }) => {
  return (
    <div
      id={elementId}
      onClick={() => console.log('clicked clear')}
      className="Clear button"
    >
      {children}
    </div>
  );
};

export default Clear;
