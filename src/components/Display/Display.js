import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

const Display = ({ elementId, operationString, result }) => {
  return (
    <div className="Display">
      <div id={elementId}>{result}</div>
      <div>{operationString || '0'}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { operationString: state.operationString, result: state.result };
};

export default connect(mapStateToProps)(Display);
