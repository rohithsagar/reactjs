import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";

class App extends Component {
  state = {
    myString: "Hello",
    myStringOne: "Debug",
  };
  handleChange = () => {
    this.setState({
      myStringOne: "Media"
    })
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <button onClick={this.handleChange}> Change Text</button>
        <Todo myStringOne={this.state.myStringOne} />
      </div>
    );
  }
}

export default App;
