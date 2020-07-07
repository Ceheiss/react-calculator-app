import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

const Display = ({ elementId, operationString, lastDigit }) => {
  console.log('from display, last digit: ', lastDigit);
  return (
    <div className="Display">
      <div>{operationString || '0'}</div>
      <div id={elementId}>{lastDigit}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { operationString: state.operationString, lastDigit: state.lastDigit };
};

export default connect(mapStateToProps)(Display);
