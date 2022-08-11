import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { response } = userLogin;

  useEffect(() => {
    if (!response) {
      navigate("/");
    }
  }, []);

  return (
    <div id="landing_page">
      <SearchBar placeholder="Enter symptoms or diseases name..." />
    </div>
  );
};

export default LandingPage;
