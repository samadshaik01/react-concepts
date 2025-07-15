import React, { Component } from "react";

class FunctionClicks_2 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
  clickHandler() {
    console.log("Button clicked");
  }
}
export default FunctionClicks_2;
