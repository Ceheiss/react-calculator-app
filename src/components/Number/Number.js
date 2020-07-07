import React from 'react';
import './Number.css';
import { connect } from 'react-redux';
import { enterValue } from '../../actions';

const Number = ({ children, elementId, enterValue }) => {
  return (
    <div
      id={elementId}
      onClick={() => enterValue(children)}
      className="Number button"
    >
      {children}
    </div>
  );
};

export default connect(null, { enterValue })(Number);
