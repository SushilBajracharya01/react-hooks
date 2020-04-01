import React, { memo } from 'react';

function Title() {
  return <div>{console.log('Title rendered')}Hello World!</div>;
}

export default memo(Title);
