import { useState } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (person.firstName === "" || person.lastName === "") {
      alert("You need to fill your name in .");
    }
    console.log("You clicked submit.");
  }

  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Listen to every change (event <b>onChange</b>) and store each value
            in a State.
          </li>
          <li>
            Listen to the <b>submit</b> event and if one field is empty, show an
            alert.
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/forms.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <form>
          <input
            type="text"
            placeholder="Name"
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
          <br />
          <input
            type="text"
            placeholder="First Name"
            value={person.lastName}
            onChange={handleLastNameChange}
          />
          <br />
          <button onClick={handleSubmit}>Valider</button>
        </form>
      </div>
    </div>
  );
}
