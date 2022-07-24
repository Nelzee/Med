import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDisease } from "../../actions/diseaseActions";

import "./DiseasePage.css";

const DiseasePage = () => {
  const dispatch = useDispatch();
  const location = useLocation().state;
  const [disease, setDisease] = useState({});
  console.log(location);

  useEffect(() => {
    const data = dispatch(getDisease(location));
    data
      .then((result) => {
        setDisease(result);
      })
      .catch((err) => {});
  }, [location, dispatch]);

  return (
    <div className="disease_container">
      <h1>{disease.name}</h1>
    </div>
  );
};

export default DiseasePage;
