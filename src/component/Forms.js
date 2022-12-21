import React, { Component } from "react";

class Forms extends Component {
  state = {
    inputValue: "",
  };
  onHandleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };
  onSubmit = () => {
    console.log(this.state.inputValue);
  };
  render() {
    return (
      <div>
        <h1>Events</h1>
        <form>
          <h2>Form Component</h2>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.onHandleChange}
          />
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
