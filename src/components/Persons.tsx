import { FC } from "react";
import IPerson from "../types/IPerson";
import Person from "./Person";

interface IPersons {
  persons: IPerson[];
}

const Persons: FC<IPersons> = ({ persons }) => {
  const elems = persons.map((person, i) => (
    <Person
      key={i}
      firstName={person.firstName}
      lastName={person.lastName}
      age={person.age}
    />
  ));

  return (
    <div>
      <h2>Persons</h2>
      {elems}
    </div>
  );
};

export default Persons;
