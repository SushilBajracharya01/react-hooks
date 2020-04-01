import React, { useState, useCallback } from 'react';
import Title from './Title';
import Salary from './Salary';
import Age from './Age';

function UseCallback() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(15000);

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const IncrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <div>
      {console.log('Render UseCallBack')}
      <Title />
      <Age age={age} />
      <button type="button" onClick={IncrementAge}>
        Increment Age
      </button>
      <Salary salary={salary} />
      <button type="button" onClick={IncrementSalary}>
        Increment Salary
      </button>
    </div>
  );
}

export default UseCallback;
