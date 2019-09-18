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
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={1}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={2}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={3}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={4}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={5}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={6}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={7}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={8}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={9}
        />
        <Button
          variant="btn btn-info"
          onClickFunction={this.updateNumber}
          userInput={0}
        />

        <Button
          variant="btn btn-secondary"
          onClickFunction={this.updateNumber}
          userInput={`+`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.updateNumber}
          userInput={`-`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.updateNumber}
          userInput={`*`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.updateNumber}
          userInput={`/`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.doMath}
          userInput={`=`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.clearDisplay}
          userInput={`.`}
        />
        <Button
          variant="btn btn-secondary"
          onClickFunction={this.clearDisplay}
          userInput={`C`}
        />
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
