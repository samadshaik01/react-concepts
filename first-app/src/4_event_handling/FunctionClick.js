import React from 'react'

function clickHandler() {
console.log('Button clicked');

}

//clickHandler() will not work with parentheses because with paraentheses it will become function call ,not function
//event handler is a function ,not a function call
function FunctionClick() {
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default FunctionClick