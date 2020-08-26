import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
    this.updateNum1 = this.updateNum1.bind(this);
    this.updateNum2 = this.updateNum2.bind(this);
  }

  updateNum1(data) {
    this.setState({
      num1: data.target.value,
    });
  }

  updateNum2(data) {
    this.setState({
      num2: data.target.value,
    });
  }

  render() {
    const { num1, num2 } = this.state;
    const total = parseInt(num1) + parseInt(num2);

    return (
      <div>
        <input
          type="number"
          value={this.state.num1}
          onChange={this.updateNum1.bind(this)}
        />
        <input
          type="number"
          value={this.state.num2}
          onChange={this.updateNum2.bind(this)}
        />

        {/* <button onClick ={this.updateResult} >Add</button>
         */}

        <h1>{total}</h1>
      </div>
    );
  }
}

export default App;
