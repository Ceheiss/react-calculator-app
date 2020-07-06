import React from 'react';
import './Equals.css';
import { connect } from 'react-redux';
import { evaluate } from '../../actions';

const Equals = ({ children, elementId, evaluate, operationString }) => {
  return (
    <div
      id={elementId}
      onClick={() => evaluate(operationString)}
      className="Equals button"
    >
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    operationString: state.operationString,
  };
};

export default connect(mapStateToProps, { evaluate })(Equals);
