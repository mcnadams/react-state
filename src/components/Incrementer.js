import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    count: 0
  };

  incrementCounter = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    return (
      <>
        <div>Current Count: { this.state.count }</div>
        <button onClick={this.incrementCounter}>Increment</button>
      </>
    );
  }

}
