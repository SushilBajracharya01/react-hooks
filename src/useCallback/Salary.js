import React, { memo } from 'react';

const Salary = (props) => {
  const { salary } = props;
  return (
    <div>
      {console.log('Rendered Salary')}
      {salary}
    </div>
  );
};

export default memo(Salary);
