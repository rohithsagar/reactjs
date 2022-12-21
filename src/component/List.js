import React, { Component } from "react";
class List extends Component {
  state = {
    data: [
      {
        id: 1,
        Name: "john",
        age: 10,
      },
      {
        id: 2,
        Name: "Rahul",
        age: 15,
      },
    ],
  };

  componentDidMount(){
    alert();

  }
  componentWillUnmount(){
    
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={value.id}>
              {value.id}-{value.Name}-{value.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
