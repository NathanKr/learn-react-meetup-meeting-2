import { useEffect, useState } from "react";
import "./App.css";
import Persons from "./components/Persons";
import IPerson from "./types/IPerson";
import PersonsBug from "./components/PersonsBug";

function App() {
  const [persons,setPersons] = useState<IPerson []>([]);
  useEffect(getPersons,[]);

  function getPersons() : void {
    const url = "/persons.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }

  return (
    <div className="App">
      {/* <PersonsBug/> */}
      <Persons persons={persons} />
    </div>
  );
}

export default App;
