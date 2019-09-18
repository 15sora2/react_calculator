import React, { Component } from "react";

class Calculator extends Component {
  state = {
    number: 0
  };

  updateNumber = valueUpdate => this.setState({ number: valueUpdate });

  render() {
    return (
      <div>
        <Display number={this.state.number} />
        <Button onClickFunction={this.updateNumber} userInput={1} />
        <Button onClickFunction={this.updateNumber} userInput={2} />
        <Button onClickFunction={this.updateNumber} userInput={3} />
        <Button onClickFunction={this.updateNumber} userInput={4} />
        <Button onClickFunction={this.updateNumber} userInput={5} />
        <Button onClickFunction={this.updateNumber} userInput={6} />
        <Button onClickFunction={this.updateNumber} userInput={7} />
        <Button onClickFunction={this.updateNumber} userInput={8} />
        <Button onClickFunction={this.updateNumber} userInput={9} />
        <Button onClickFunction={this.updateNumber} userInput={0} />
        <Button onClickFunction={this.updateNumber} userInput={`=`} />
      </div>
    );
  }
}

class Button extends Component {
  handleClick = () => this.props.onClickFunction(this.props.userInput);
  render() {
    return <button onClick={this.handleClick}>{this.props.userInput}</button>;
  }
}

class Display extends Component {
  render() {
    return <h1>{this.props.number}</h1>;
  }
}

export default Calculator;
