import React, { Component } from "react";

class EventBind extends Component {
  /*   
   constructor() {
    super();
    this.state = {
      message: "hello",
    };
  }

 */
  // Application breaks after click .it will not work because 'this' is not bound to the class instance
  clickHandler() {
    this.setState({
      message: "goodbye",
    });
    //console.log(this);-->undefined
    console.log("state changed after clicking button");
  }

  render_0() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }

  // approch 1 : binding in render method (not recommended bcs of performance issues)
  render_1() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>click</button>
      </div>
    );
  }

  // approch 2 : using arrow functions in render method (not recommended bcs of performance issues)
  render_2() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>click</button>
      </div>
    );
  }

  // approch 3 : binding in class constructor (recommended)

  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  render_3() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }

  // approch 4 : class property as arrow functions (recommended(2))

  clickHandler_4 = () => {
    this.setState({
      message: "goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler_4}>click</button>
      </div>
    );
  }
}

export default EventBind;
