import React, { Component } from "react";

class Calculator extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={() => this.setState({ number: 1 })}>1</button>
        <button onClick={() => this.setState({ number: 2 })}>2</button>
        <button onClick={() => this.setState({ number: 3 })}>3</button>
        <button onClick={() => this.setState({ number: 4 })}>4</button>
        <button onClick={() => this.setState({ number: 5 })}>5</button>
        <button onClick={() => this.setState({ number: 6 })}>6</button>
        <button onClick={() => this.setState({ number: 7 })}>7</button>
        <button onClick={() => this.setState({ number: 8 })}>8</button>
        <button onClick={() => this.setState({ number: 9 })}>9</button>
        <button onClick={() => this.setState({ number: 0 })}>0</button>
        <button>=</button>
      </div>
    );
  }
}

export default Calculator;
