import React, { useReducer } from 'react';

const initalState = {
  user1: 'Sushil',
  user2: 'Ram',
  firstCount: 0,
  secondCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT 1':
      return { ...state, firstCount: state.firstCount + 1 };
    case 'DECREMENT 1':
      return { ...state, firstCount: state.firstCount - 1 };
    case 'INCREMENT 2':
      return { ...state, secondCount: state.secondCount + 1 };
    case 'DECREMENT 2':
      return { ...state, secondCount: state.secondCount - 1 };
    case 'INCREMENT':
      return {
        ...state,
        firstCount: state.firstCount + action.value,
        secondCount: state.secondCount + action.value,
      };
    default:
      return { state };
  }
};
function ObjectReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h1>Hello</h1>
      <div>
        1.{state.user1}:{state.firstCount}
      </div>
      <div>
        2.{state.user2}:{state.secondCount}
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT 1' })}>
          INCREMENT 1
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT 1' })}>
          DECREMENT 1
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT 2' })}>
          INCREMENT 2
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT 2' })}>
          DECREMENT 2
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>
          INCREMENT BOTH BY 5
        </button>
      </div>
    </div>
  );
}

export default ObjectReducer;
