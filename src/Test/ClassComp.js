import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'sushil',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        {console.log('ClassComp rendered')}
        Hello world {name}
        <div>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            value={name}
          />
        </div>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </div>
    );
  }
}

export default ClassComp;
