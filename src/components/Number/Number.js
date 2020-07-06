import React from 'react';
import './Number.css';
import { connect } from 'react-redux';
import { enterOperator } from '../../actions';

const Number = ({ children, elementId, enterOperator }) => {
  return (
    <div
      id={elementId}
      onClick={() => enterOperator(children)}
      className="Number button"
    >
      {children}
    </div>
  );
};

export default connect(null, { enterOperator })(Number);
