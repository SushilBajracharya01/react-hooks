import React, { memo } from 'react';

const Salary = (props) => {
  return (
    <div>
      {console.log('Rendered Salary')}
      {props.salary}
    </div>
  );
};

export default memo(Salary);
