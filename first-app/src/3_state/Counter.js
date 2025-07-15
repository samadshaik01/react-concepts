import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //1. this is not correct way to update state in class based component .because it will not re-render the component
  increment_1() {
    this.state.count = this.state.count + 1;
    console.log("Incremented Count: ", this.state.count);
  }

  //2. console log will not show the updated value immediately .because setState is asynchronous
  increment_2() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("Incremented Count: ", this.state.count);
  }

  //3. using callback function to get the updated value after setState is called . callback function is executed after the state is updated
  increment_3() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value: ", this.state.count);
      }
    );
    console.log("Incremented Count: ", this.state.count);
  }

  //4. without prevState, it will not give the correct value because setState is asynchronous and it will not wait for the state to be updated
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log("Incremented Count: ", this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment_five()}>Increment</button>
      </div>
    );
  }

  increment_five() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
}

export default Counter;
