import React from 'react';

class Comp1 extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        {console.log('Comp1 rendered')}
        Hello from Comp1
      </div>
    );
  }
}

export default Comp1;
