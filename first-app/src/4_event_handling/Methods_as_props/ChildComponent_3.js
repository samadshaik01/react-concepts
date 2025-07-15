import React from 'react'
 function ChildComponent_3(props) {
  return (
    //passing parameter to parent method in parent component using arrow function
    <div>
        <button onClick={()=>props.greetHandler_1('child')}> greetParent_3</button>
    </div>
  )
}
export default ChildComponent_3;