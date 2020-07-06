import React from 'react';
import './Display.css';

const Display = ({ children, elementId }) => {
  return (
    <div id={elementId} className="Display">
      {children}
    </div>
  );
};

export default Display;
