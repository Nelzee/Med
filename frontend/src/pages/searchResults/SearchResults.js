import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "../../components/searchResult/SearchResult";

const SearchResults = () => {
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
