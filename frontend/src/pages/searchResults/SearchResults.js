import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "../../components/searchResult/SearchResult";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const sampleLocation = useLocation();

  console.log(sampleLocation.pathname);
  const diseaseList = useSelector((state) => state.diseaseList);
  const { diseases } = diseaseList;

  return (
    <div>
      {diseases.map((disease) => (
        <SearchResult details={disease} />
      ))}
    </div>
  );
};

export default SearchResults;
