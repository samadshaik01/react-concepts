import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent_2 from "./ChildComponent_2";
import ChildComponent_3 from "./ChildComponent_3";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
    this.greetParent_1 = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  //receiving parameter from child component
  //this is useful when you want to pass additional information from the child to the parent
  greetParent_1(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  //passing method as prop to child components
  //this is a common pattern in React to allow child components to communicate with their parent
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
        <ChildComponent_2 greetHandler={this.greetParent} />
        <ChildComponent_3 greetHandler_1={this.greetParent_1} />
      </div>
    );
  }
}

export default ParentComponent;
