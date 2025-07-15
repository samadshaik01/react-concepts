import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  //IF/ELSE
  render_1() {
    if (this.state.isLoggedIn) {
      return <div>Welcome user</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }

  //Element Variables
  render_2() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome user</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return message;
  }

  //Ternary Conditional Operator
  render_3() {
    return this.state.isLoggedIn ? (
      <div>Welcome user</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }

  //Short Circuit Operator
  render() {
    return this.state.isLoggedIn && <div>Welcome user</div>;
  }
}
