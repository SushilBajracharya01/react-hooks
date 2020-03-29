import React, { useContext } from 'react';
import { CountContext } from './ConRedExample';

function CompC() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button onClick={() => countContext.countDispatch('INCREMENT')}>+</button>
      <button onClick={() => countContext.countDispatch('DECREMENT')}>-</button>
      <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
    </div>
  );
}

export default CompC;
