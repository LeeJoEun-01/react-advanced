// import logo from './logo.svg';
import './App.css';
import React from 'react';

class Foo extends React.Component  {
  componentDidMount() {
    console.log("Foo componentDidMount");
  }
  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }

  //라이프 사이클 훅
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {}; // return 꼭 해줘야 됨
  }
  render() {
    console.log("Foo render");
    return <p>Foo</p>;
  } 
}
class App extends React.Component {
  // 엘리먼트의 타입이 다른 경우
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  render() {
    if (this.state.count % 2 === 0) {
      return <Foo name="Mark" />;
    }

    return <Foo name="Hanna" />;
  }
}

export default App;
