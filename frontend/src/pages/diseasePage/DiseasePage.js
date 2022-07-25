import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

import "./DiseasePage.css";

const DiseasePage = () => {
  const id = useLocation().state;
  const [disease, setDisease] = useState();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/diseases/disease/${id}`);
      setDisease(data);
    };

    fetching();
  }, [id]);

  return (
    <div className="disease_container">
      {disease ? (
        <>
          <h1>{disease.name}</h1>
          <p>{disease.details}</p>
          <h2>Symptoms</h2>
          <ul>
            {disease.symptoms.map((symptom, index) => {
              return <li key={index}>{symptom}</li>;
            })}
          </ul>
          <h2>Common Tests</h2>
          <ul>
            {disease.commonTestsAndProcedures.map((tests, index) => {
              return <li key={index}>{tests}</li>;
            })}
          </ul>
          <h2>Medications</h2>
          <ul>
            {disease.commonMedications.map((medication, index) => {
              return <li key={index}>{medication}</li>;
            })}
          </ul>{" "}
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default DiseasePage;
