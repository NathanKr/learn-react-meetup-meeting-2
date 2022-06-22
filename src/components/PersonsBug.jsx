import { useEffect, useState } from "react";
// import "./App.css";
import Persons from "./Persons";

function PersonsBug() {
  useEffect(getPersons,[]);
  const [persons,setPersons] = useState()

  function getPersons() {
    const url = "/persons.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }

  return (
    <div className="App">
      <Persons persons={persons}/>
    </div>
  );
}

export default PersonsBug;