import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = { color: '' }

  setColor = color => {
    this.setState({ color });
    console.log(color);
  };

  render() {

    return (
    <>
      <ColorPicker colorUpdater={this.setColor}/>
      <ColorDisplay color={this.state.color}/>
    </>
    );
  }
}
