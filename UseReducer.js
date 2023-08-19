import { ButtonGroup } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { CurrencyCodes } from 'validator/lib/isISO4217';

const InitialState = 0;

const reducerFun = (curState, actionMethod) => {
  console.log(curState, actionMethod);
  if (actionMethod.type === 'increment') {
    return curState + 1;
  } else if (actionMethod.type === 'decrement') {
    return curState - 1;
  }
  return curState;
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducerFun, InitialState); // Removed trailing comma

  return (
    <>
      <h2>{count}</h2>
      {/* Wrapped dispatch calls in arrow functions */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <h2>Use reducer hooks in ReactJS</h2>
    </>
  );
};

export default UseReducer; // Removed trailing comma
