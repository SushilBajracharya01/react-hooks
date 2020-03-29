import React, { useContext } from 'react';
import { CountContext } from './ConRedExample';

function CompE() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button onClick={() => countContext.countDispatch('INCREMENT')}>+</button>
      <button onClick={() => countContext.countDispatch('DECREMENT')}>-</button>
      <button onClick={() => countContext.countDispatch('RESET')}>RESET</button>
    </div>
  );
}

export default CompE;
