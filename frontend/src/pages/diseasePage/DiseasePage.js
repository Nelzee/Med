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
  }, [location]);

  return (
    <div className="disease_container">
      <h1>{disease.name}</h1>
      <p>{disease.details}</p>
      <h2>Symptoms</h2>
      <ul>
        {disease.symptoms.map((symptom) => {
          return <li>{symptom}</li>;
        })}
      </ul>
      <h2>Medications</h2>
      <ul>
        {disease.commonTestsAndProcedures.map((tests) => {
          return <li>{tests}</li>;
        })}
      </ul>
      <h2>Medications</h2>
      <ul>
        {disease.commonMedications.map((medication) => {
          return <li>{medication}</li>;
        })}
      </ul>
    </div>
  );
};

export default DiseasePage;
