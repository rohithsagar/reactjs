import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  firstClick = () => {
    console.log("running");
  };
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>{this.state.counter}</h4>
        <button onClick={this.firstClick}>Click me</button>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
