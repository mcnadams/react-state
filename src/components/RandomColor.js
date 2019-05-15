import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class RandomColor extends PureComponent {

  state = {
    color: '',
    'background-image': ''
  }

  // constructor(intervalLength) {
  //   // super();
  //   console.log(Math.random() * 200000);
  //   this.intervalLength = intervalLength;
  //   this.intervalLength = 2000;
  // }

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
      'mediumslateblue'
    ];

    let rand = Math.random() * colors.length;
    rand = Math.floor(rand);

    return colors[rand];
  }

  componentDidMount() {
    this.intervalLength = this.props.intervalLength || Math.random() * 3000;
    console.log('interval', this.intervalLength);
    this.intervalId = setInterval(() => {
      const newColor = this.randomColor();
      if(newColor === this.state.color) {
        console.log('repeat color');
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
      width: '20vh',
      height: '20vh',
      display: 'inline-block'
    };
    return <div style={styles}></div>;
  }
}

RandomColor.propTypes = {
  intervalLength: PropTypes.number
};

export default RandomColor;
