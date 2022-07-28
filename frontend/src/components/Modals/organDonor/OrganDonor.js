import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Select from "react-select";
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

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const NAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ID_REGEX = /^(\d{2})-(\d{6})(\d?)([a-zA-Z]{1})(\d{2})/;

const DoctorRestisterPage = ({ toggle }) => {
  const [errMsg, setErrMsg] = useState("");

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    idNumber: "",
    type: options[0].value,
  });

  const handleChange = (e) => {
    setCredentials((credentials) => {
      return { ...credentials, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="modalBackground">
      <form className="organRegForm" onSubmit={handleSubmit}>
        <div className="organFormHeader">
          <h2>select organs you would like to donate</h2>
          <span onClick={() => toggle(false)}>X</span>
        </div>

        <Select options={options} isMulti defaultValue={options[0]} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default DoctorRestisterPage;
