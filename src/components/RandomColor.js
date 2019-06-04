import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class RandomColor extends PureComponent {

  state = {
    color: '',
    'background-image': '',
    border: ''
  }

  randomColor = () => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'fuschia', 
      'lime',
      'cerulean',
      'salmon',
      'maroon',
      'teal',
      'navy',
      'aqua',
      'gray',
      'orangered',
      'crimson',
      'orchid',
      'thistle',
      'mediumslateblue',
      'hotpink'
    ];

    let rand = Math.random() * colors.length;
    rand = Math.floor(rand);

    return colors[rand];
  }

  componentDidMount() {
    this.intervalLength = this.props.intervalLength || Math.random() * 3000;
    while(this.intervalLength < 300) {
      this.intervalLength = Math.random() * 3000;
    }
    console.log('interval', this.intervalLength);
    this.intervalId = setInterval(() => {
      const newColor = this.randomColor();
      const borderColor = this.randomColor();
      this.setState({ border: borderColor });
      if(newColor === this.state.color) {
        const img = 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg';
        this.setState({ color: `center / contain url(${img})` });
      }
      else {
        this.setState({ color: newColor, 'background-image': '' });
      }
    }, this.intervalLength);
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const styles = {
      background: this.state.color,
      border: `3px solid ${this.state.border}`,
      width: '20vh',
      height: '20vh',
      display: 'inline-block',
      transition: 'background .15s linear'
    };
    return <div style={styles}></div>;
  }
}

RandomColor.propTypes = {
  intervalLength: PropTypes.number
};

export default RandomColor;
