import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

const Display = ({ children, elementId, operationString }) => {
  return (
    <div id={elementId} className="Display">
      {operationString}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { operationString: state.operationString };
};

export default connect(mapStateToProps)(Display);
