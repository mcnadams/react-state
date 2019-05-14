import React from 'react';
import PropTypes from 'prop-types';
import styles from './Color.css';

function ColorDisplay({ color }) {
  return (
    <div id={styles['color-display']} className={styles[color]}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
