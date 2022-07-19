import React from "react";
import { useSelector } from "react-redux";

const DiseasePage = () => {
  const diseaseList = useSelector((state) => state.diseaseList);
  const { diseases } = diseaseList;

  const disease = diseases[0];

  return (
    <div>
      <h1>{disease.name}</h1>
    </div>
  );
};

export default DiseasePage;
