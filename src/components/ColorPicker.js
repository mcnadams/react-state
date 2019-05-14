import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  }

  changeColor = color => {
    this.setState({ color });
  }

  render() {
    return (
      <>
        <button onClick={this.changeColor.bind(null, 'red')} className={styles.red}>Red</button>
        <button onClick={this.changeColor.bind(null, 'yellow')} className={styles.yellow}>Yellow</button>
        <button onClick={this.changeColor.bind(null, 'blue')} className={styles.blue}>Blue</button>
        <div id={styles['color-block']} className={styles[this.state.color]}></div>
      </>
    );
  }

}
