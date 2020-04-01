import React, { memo } from 'react';

const Age = (props) => {
  return (
    <div>
      {console.log('rendered age')}
      {props.age}
    </div>
  );
};

export default memo(Age);
