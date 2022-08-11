import React, { useState } from "react";
import Select from "react-select";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import "./OrganDonor.css";

const options = [
  { value: "Kidney", label: "Kidney" },
  { value: "Skin", label: "Skin" },
  { value: "Bone", label: "Bone" },
  { value: "Bone Marrow", label: "Bone Marrow" },
  { value: "umbilical cord blood", label: "umbilical cord blood" },
  { value: "Amnion", label: "Amnion" },
  { value: "Blood", label: "Blood" },
  { value: "Liver Lobe", label: "Liver Lobe" },
  { value: "lung", label: "lung" },
  { value: "Part of Pancreas", label: "Part of Pancreas" },
  { value: "Part of intestine", label: "Part of intestine" },
];

const DoctorRestisterPage = ({ toggle }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const {
    response: { _id },
  } = userLogin;

  const [organs, setOrgans] = useState([]);

  const handleChange = (e) => {
    setOrgans(e?.map((val) => val.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios.post("/api/users/organs", { id: _id, organs }, config);
    toggle(false);
  };

  return (
    <div className="modalBackground">
      <form className="organRegForm" onSubmit={handleSubmit}>
        <div className="organFormHeader">
          <h2>select organs you would like to donate</h2>
          <span onClick={() => toggle(false)}>X</span>
        </div>

        <Select
          onChange={handleChange}
          options={options}
          isMulti
          defaultValue={options[0]}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default DoctorRestisterPage;
