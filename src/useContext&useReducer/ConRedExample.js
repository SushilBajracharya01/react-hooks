import React, { useReducer } from 'react';
import CompA from './CompA';
import CompD from './CompD';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();
function ConRedExample() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count: {count}
        <CompA />
        <CompD />
      </div>
    </CountContext.Provider>
  );
}

export default ConRedExample;
