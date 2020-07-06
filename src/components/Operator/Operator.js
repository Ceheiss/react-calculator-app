import React from 'react';
import './Operator.css';
import { connect } from 'react-redux';
import { enterOperator } from '../../actions';

const Operator = ({ children, elementId, enterOperator }) => {
  let operator;

  if (children === 'x') {
    operator = '*';
  } else {
    operator = children;
  }

  return (
    <div
      id={elementId}
      onClick={() => enterOperator(operator)}
      className="Operator button"
    >
      {children}
    </div>
  );
};

export default connect(null, { enterOperator })(Operator);
