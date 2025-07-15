import React from "react";

// const Greet = () => <h1>hello from GreetOne</h1>

const Greet_two = (props) => {
  console.log(props);
  return (
    <div>
      <h1>hello from {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Greet_two;
