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

const mapStateToProps = (state) => {
  console.log('states: ', state);
  return { state };
};

export default connect(mapStateToProps, { enterOperator })(Number);
