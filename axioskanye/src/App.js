import React, { useState, useEffect } from "react";
import KanyeGif from "./KanyeGif";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [oldQuotes, setOldQuotes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // getData();
    const intervalId = setInterval(() => {
      getData();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getData = () => {
    axios
      .get("https://api.kanye.rest/")
      .then((response) => {
        setQuote(response.data.quote);
        setOldQuotes((prevState) => [response.data.quote, ...prevState]);
      })
      .catch((error) => {
        console.error(
          "There was a problem loading a Kanye quote, please try again later",
          error
        );
        setError(true);
      });
  };

  if (error) {
    return (
      <div className="App">
        <h1>
          There was a problem loading a Kanye quote, please try again later
        </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <br />
      <br />
      <KanyeGif />
      <h2>QUOTE</h2>
      {/* Your code here! */}
      {!quote ? <h6>"Loading..."</h6> : <h3>{quote}</h3>}

      {!oldQuotes ? (
        <h2>OLD QUOTES</h2>
      ) : (
        <h2>
          Previous {oldQuotes.length > 10 ? 10 : oldQuotes.length} quote
          {oldQuotes.length > 1 ? "s" : ""}
        </h2>
      )}

      {!oldQuotes ? (
        <h6>"Loading..."</h6>
      ) : (
        <ol>
          {oldQuotes.slice(1, 11).map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default App;
