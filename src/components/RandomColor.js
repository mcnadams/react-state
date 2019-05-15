import React, { PureComponent } from 'react';


export default class RandomColor extends PureComponent {

  state = {
    color: '',
    img: ''
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
      this.setState({ color: this.randomColor(), img: '' });
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
