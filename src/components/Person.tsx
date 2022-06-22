import { FC } from "react";
import IPerson from "../types/IPerson";
import "./Person.css";


// 1. use props with any - this is like in js
// const Person = (props : any) => {

// 2. use props 
// const Person = (props: {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }) => {

// 3. use props with IPerson
// const Person = (props: IPerson) => {

const Person: FC<IPerson> = ({ firstName, lastName, age }) => {
  return (
    <div className="Person">
      <span>{firstName}</span>
      <span>{lastName}</span>
      {age && <span>{2022 - age}</span>}
    </div>
  );
};

export default Person;
