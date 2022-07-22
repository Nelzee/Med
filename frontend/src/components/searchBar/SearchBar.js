import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDiseases } from "../../actions/diseaseActions";
import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder }) {
  const dispatch = useDispatch();

  const diseaseList = useSelector((state) => state.diseaseList);
  const { diseases } = diseaseList;
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);
    dispatch(listDiseases(searchWord.split(" ")));
    const newFilter = diseases.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(diseases);
    }
  };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <p key={key} style={{ color: "black" }}>
                {value.name}{" "}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
