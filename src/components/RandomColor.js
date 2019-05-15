import React, { PureComponent } from 'react';


export default class RandomColor extends PureComponent {

  state = {
    color: '',
    'background-image': ''
  }

  randomColor = () => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'fuschia'
    ];

    let rand = Math.random() * colors.length;
    rand = Math.floor(rand);

    return colors[rand];
  }

  componentDidMount() {
    setInterval(() => {
      const newColor = this.randomColor();
      if(newColor === this.state.color) {
        console.log('repeat color');
        const img = 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg';
        this.setState({ color: `center / contain url(${img})` });
      }
      else {
        this.setState({ color: newColor, 'background-image': '' });
      }
    }, 1000);
  }

  render() {
    const styles = {
      background: this.state.color,
      width: '80vh',
      height: '80vh'
    };
    return <div style={styles}></div>;
  }
}
