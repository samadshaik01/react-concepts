import React from "react";

// const Greet = () => <h1>hello from GreetOne</h1>

const Greet_one = (props) => {
  console.log(props);
  //props.name="samad"; //this will not work, props are read-only ,bascase they are immutable
  return <h1>hello from {props.name} aka {props.heroName}</h1>;
};

export default Greet_one;

