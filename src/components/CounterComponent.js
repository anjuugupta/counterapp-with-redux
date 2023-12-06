// ./components/CounterComponent.js

import React from 'react';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { inc, dec, mul, reset } from '../redux/action';

const CounterComponent = ({ counter, inc, dec, mul, reset }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button onClick={inc}>Inc</Button>
      <Button onClick={dec}>Dec</Button>
      <Button onClick={mul}>Multiply</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  inc,
  dec,
  mul,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
