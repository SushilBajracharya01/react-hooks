import React, { useState } from 'react';

function CounterTwo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const Increment1 = () => {
    setCounter1(counter1 + 1);
  };
  const Increment2 = () => {
    setCounter2(counter2 + 1);
  };
  return (
    <div>
      <div>
        <button onClick={Increment1}>{counter1}</button>
      </div>
      <div>
        <button onClick={Increment2}>{counter2}</button>
      </div>
    </div>
  );
}

export default CounterTwo;
