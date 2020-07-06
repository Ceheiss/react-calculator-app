import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

const Display = ({ elementId, operationString, result }) => {
  return (
    <div id={elementId} className="Display">
      <div>{result}</div>
      <div>{operationString || '0'}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { operationString: state.operationString, result: state.result };
};

export default connect(mapStateToProps)(Display);
