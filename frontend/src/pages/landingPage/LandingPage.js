import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/searchBar/SearchBar";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div id="landing_page">
      <SearchBar placeholder="Enter symptoms or diseases name..." />
    </div>
  );
};

export default LandingPage;
