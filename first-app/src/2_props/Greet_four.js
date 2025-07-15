import React from "react";

//destructuring props in functional components

/* 
const Greet_four = (props) => {
  return <div>hello from {props.name}</div>;
};

 */
// Using destructuring to extract props directly in parameters
const Greet_four1 = ({ name, heroName }) => {
  return (
    <div>
      hello from {name} aka {heroName}
    </div>
  );
};

// Using destructuring inside the function body
const Greet_four = props => {
    const { name, heroName } = props;
  return (
    <div>
      hello from {name} aka {heroName}
    </div>
  );
};

export default Greet_four;
