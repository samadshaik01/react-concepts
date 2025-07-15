import React from "react";

//for class based component ,this"s keyword is used to access props
class Greet_three extends React.Component {
    render() {
        return <h1>Hello from {this.props.name}</h1>;
    }
}

//destructuring props 
class Greet_three_1 extends React.Component {
    render() {
        const { name } = this.props; 
        return <h1>Hello from {name}</h1>;
    }
}

//destructuring states 
class Greet_three_2 extends React.Component {
    render() {
        const { state1 ,state2 } = this.state; 
        return <h1>Hello</h1>;
    }
}

export default Greet_three;