import "./App.css";
import { sculptureList } from "./data/data";
import { useState } from "react";

// console.log(sculptureList);

export function App() {
  const [index, setIndex] = useState(0);

  let sculpture = sculptureList[index];
  const { alt, artist, description, name, url } = sculpture;

  const handleClick = () => {
    setIndex(() => index + 1);
  };

  return (
    <>
      <button onClick={handleClick}> Next </button>
      <h2>
        <i>{name}</i>
        <span> by {artist} </span>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={url} alt={alt} />
      <p>{description}</p>
    </>
  );
}
