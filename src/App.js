import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";

class App extends Component {
  state = {
    myString: "Hello",
    myStringOne: "Debug"
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <Todo  myStringOne={this.state.myStringOne} />
      </div>
    );
  }
}

export default App;
