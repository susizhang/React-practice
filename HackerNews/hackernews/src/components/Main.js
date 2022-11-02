import React from "react";
import Filter from "./Filter";
import Article from "./Article";

const Main = ({ hits, text }) => {
  return (
    <div className="main-container">
      <Filter />
      <Article hits={hits} text={text} />
    </div>
  );
};

export default Main;
