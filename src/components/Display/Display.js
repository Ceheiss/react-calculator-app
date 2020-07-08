import React from 'react';
import './Display.css';
import { connect } from 'react-redux';
import { getLastNumber } from '../../helpers/getLastNumber/getLastNumber';
import { isOperator } from '../../helpers/isOperator/isOperator';

const Display = ({ elementId, operationString, lastDigit }) => {
  let numberPromp;
  if (isOperator(lastDigit)) {
    numberPromp = lastDigit;
  } else {
    numberPromp = getLastNumber(operationString);
  }

  return (
    <div className="Display" style={{ height: '50px' }}>
      <div style={{ color: 'orange', height: '25px' }}>{operationString}</div>
      <div style={{ height: '25px' }} id={elementId}>
        {numberPromp || '0'}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    operationString: state.operationString,
    lastDigit: state.lastDigit,
    result: state.result,
  };
};

export default connect(mapStateToProps)(Display);
