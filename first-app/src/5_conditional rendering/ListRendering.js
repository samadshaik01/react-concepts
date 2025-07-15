import React from "react";
import Person from "./Person";

function ListRendering_1() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
    </div>
  );
}
//map method is used to iterate over an array and return a new array with the results of calling a provided function on every element in the calling array.
function ListRendering_2() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

//more concise version of ListRendering
function ListRendering_3() {
  const names = ["Bruce", "Clark", "Diana"];
  const namesList = names.map((name) => <h2>{name}</h2>);
  return <div>{namesList}</div>;
}

// ListRendering component that uses an array of objects
function ListRendering_4() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
    },
    {
      id: 2,
      name: "Clark",
    },
    {
      id: 3,
      name: "Diana",
    },
  ];
  const personsList = persons.map((person) => <h2>Id is {person.id} and name is  {person.name}</h2>);
  return <div>{personsList}</div>;
}

//using the .map() method to render a list of Person components, passing each person object as a prop
function ListRendering() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
    },
    {
      id: 2,
      name: "Clark",
    },
    {
      id: 3,
      name: "Diana",
    },
  ];
 
  const personsList=persons.map(person=><Person person={person}/>)
  return(
    <div>
        {personsList}
    </div>
  )
}
export default ListRendering;
