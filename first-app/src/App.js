import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./1_components/FunctionalComponent";
import ClassComponent from "./1_components/ClassComponent";
import Greet_one from "./2_props/Greet_one";
import Greet_two from "./2_props/Greet_two";
import Greet_three from "./2_props/Greet_three";
import Greet_four from "./2_props/Greet_four";
import Message from "./3_state/Message";
import Counter from "./3_state/Counter";
import FunctionClick from "./4_event_handling/FunctionClick";
import FunctionClick_2 from "./4_event_handling/FunctionClicks_2";
import EventBind from "./4_event_handling/EventBind";
import ParentComponent from "./4_event_handling/Methods_as_props/ParentComponent";
import UserGreeting from "./5_conditional rendering/UserGreeting";
import ListRendering from "./5_conditional rendering/ListRendering";

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}

      {/* 
      <Greet_one name="Bruce" heroName="Batsman" />
      <Greet_one name="Clark" heroName="SuperMan" />
      <Greet_one name="Diana" heroName="wonder women" /> 
      */}

      {/* 
      <Greet_two name="samad">
        <p>This is children prop</p>
      </Greet_two>

      <Greet_two name="samad_2">
        <button>click me</button>
      </Greet_two>

      <Greet_three name="samad_3" /> 
      <Greet_four name="samad_4" />
      */}

      {/* <Message/> */}
      {/* <Counter /> */}
      {/* <FunctionClick_2 /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <ListRendering />


      
    </div>
  );
}

export default App;
