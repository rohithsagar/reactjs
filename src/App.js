import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";
import Counter from "./component/Counter"
import Forms from "./component/Forms";
import List from "./component/List";

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
        <h1>List</h1>
        {/* <button onClick={this.handleChange}> Change Text</button>
        <Todo myStringOne={this.state.myStringOne} />
        <Counter />
        <Forms /> */}
        <List />
      </div>
    );
  }
}

export default App;
