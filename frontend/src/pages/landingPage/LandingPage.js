import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    navigate("./register");
  }

  return (
    <div id="landing_page">
      <SearchBar placeholder="Enter symptoms or diseases name..." />
    </div>
  );
};

export default LandingPage;
