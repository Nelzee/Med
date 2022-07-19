import React from "react";
import "./SearchResult.css";

const SearchResult = ({ details }) => {
  return (
    <div key={details.name}>
      <h2>{details.name}</h2>
      <p>{details.details}</p>
    </div>
  );
};

export default SearchResult;
