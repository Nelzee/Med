import React from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ details }) => {
  return (
    <div key={details.name} className="search_result">
      <h2>
        {" "}
        <Link to="/disease" state={details._id}>
          {details.name}
        </Link>
      </h2>
      <p>{details.details.split(" ").slice(0, 20).join(" ")}...</p>
    </div>
  );
};

export default SearchResult;
