import React, { Component } from "react";

class Calculator extends Component {
  state = {
    number: "0"
  };

  updateNumber = valueUpdate =>
    this.state.number === "0"
      ? this.setState({ number: valueUpdate.toString() })
      : this.setState({ number: this.state.number.concat(valueUpdate) });

  doMath = () => this.setState({ number: eval(this.state.number).toString() });
  clearDisplay = () => this.setState({ number: "0" });

  render() {
    return (
      <div className="col-6 col-sm-3">
        <Display number={this.state.number} />
        <Button
          class="calc-button"
          onClickFunction={this.updateNumber}
          userInput={1}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={2}
        />
        <Button onClickFunction={this.updateNumber} userInput={3} />
        <Button onClickFunction={this.updateNumber} userInput={4} />
        <Button onClickFunction={this.updateNumber} userInput={5} />
        <Button onClickFunction={this.updateNumber} userInput={6} />
        <Button onClickFunction={this.updateNumber} userInput={7} />
        <Button onClickFunction={this.updateNumber} userInput={8} />
        <Button onClickFunction={this.updateNumber} userInput={9} />
        <Button onClickFunction={this.updateNumber} userInput={0} />

        <Button onClickFunction={this.updateNumber} userInput={`+`} />
        <Button onClickFunction={this.updateNumber} userInput={`-`} />
        <Button onClickFunction={this.updateNumber} userInput={`*`} />
        <Button onClickFunction={this.updateNumber} userInput={`/`} />
        <Button onClickFunction={this.doMath} userInput={`=`} />
        <Button onClickFunction={this.clearDisplay} userInput={`C`} />
      </div>
    );
  }
}

class Button extends Component {
  handleClick = () => this.props.onClickFunction(this.props.userInput);
  render() {
    return (
      <button className={this.props.variant} onClick={this.handleClick}>
        {this.props.userInput}
      </button>
    );
  }
}

class Display extends Component {
  render() {
    return <h1>{this.props.number}</h1>;
  }
}

export default Calculator;
