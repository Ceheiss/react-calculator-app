import React from 'react';
import './App.css';
import Number from '../Number/Number';
import Equals from '../Equals/Equals';
import Operator from '../Operator/Operator';
import Clear from '../Clear/Clear';
import Display from '../Display/Display';

const App = () => {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display elementId="display" />
      <div className="wrapper">
        <Number elementId="zero">0</Number>
        <Number elementId="one">1</Number>
        <Number elementId="two">2</Number>
        <Number elementId="three">3</Number>
        <Number elementId="four">4</Number>
        <Number elementId="five">5</Number>
        <Number elementId="six">6</Number>
        <Number elementId="seven">7</Number>
        <Number elementId="eight">8</Number>
        <Number elementId="nine">9</Number>
        <Number elementId="decimal">.</Number>
        <Equals elementId="equals">=</Equals>
        <Operator elementId="add">+</Operator>
        <Operator elementId="subtract">-</Operator>
        <Operator elementId="multiply">x</Operator>
        <Operator elementId="divide">/</Operator>
        <Clear elementId="clear">AC</Clear>
      </div>
    </div>
  );
};

export default App;
