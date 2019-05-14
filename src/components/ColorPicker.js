import React from 'react';
import PropTypes from 'prop-types';
import styles from './Color.css';

function ColorPicker({ colorUpdater }) {
  return (
    <>
      <button className={styles.red} onClick={() => colorUpdater('red')}>Red</button>
      <button className={styles.yellow} onClick={() => colorUpdater('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={() => colorUpdater('blue')}>Blue</button>
    </>
  );
}

ColorPicker.propTypes = {
  colorUpdater: PropTypes.func.isRequired
};

export default ColorPicker;
