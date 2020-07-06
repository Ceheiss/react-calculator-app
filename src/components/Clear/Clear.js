import React from 'react';
import './Clear.css';
import { connect } from 'react-redux';
import { clear } from '../../actions';

const Clear = ({ children, elementId, clear }) => {
  return (
    <div id={elementId} onClick={() => clear()} className="Clear button">
      {children}
    </div>
  );
};

export default connect(null, { clear })(Clear);
