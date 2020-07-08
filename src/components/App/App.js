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
      <div className="wrapper">
        <section className="display-wrapper">
          <Display elementId="display" />
        </section>
        <section className="specials-wrapper">
          <Clear elementId="clear">AC</Clear>
          <Equals elementId="equals">=</Equals>
        </section>
        <section className="numbers-wrapper">
          <Number elementId="one">1</Number>
          <Number elementId="two">2</Number>
          <Number elementId="three">3</Number>
          <Number elementId="four">4</Number>
          <Number elementId="five">5</Number>
          <Number elementId="six">6</Number>
          <Number elementId="seven">7</Number>
          <Number elementId="eight">8</Number>
          <Number elementId="nine">9</Number>
          <Number elementId="zero" className="zero-element">
            0
          </Number>
          <Number elementId="decimal">.</Number>
        </section>
        <section className="operators-wrapper">
          <Operator elementId="add">+</Operator>
          <Operator elementId="subtract">-</Operator>
          <Operator elementId="multiply">x</Operator>
          <Operator elementId="divide">/</Operator>
        </section>
      </div>
      <p>
        Designed and coded by <br /> <span>Cristobal Heiss</span>
      </p>
      <p>
        <a href="https://github.com/Ceheiss/react-calculator-app">
          <i class="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
};

export default App;
