import React from 'react';

class Comp2 extends React.Component {
  render() {
    return (
      <div>
        {console.log('Comp2 rendered')}
        Hello from Comp2
      </div>
    );
  }
}

export default Comp2;
