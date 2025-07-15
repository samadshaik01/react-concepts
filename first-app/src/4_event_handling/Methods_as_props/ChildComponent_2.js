import React, { Component } from 'react'

export default class ChildComponent_2 extends Component {
  render(props) {
    return (
      <div>
        <button onClick={this.props.greetHandler_1}> greetParent1</button>
      </div>
    )
  }
}
