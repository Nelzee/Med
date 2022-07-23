import React, { useState } from "react";
import "./DoctorRegisterPage.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DoctorRestisterPage = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    idNumber: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="docRegForm" onSubmit={handleSubmit}>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first Name"
        />
      </div>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last Name"
        />
      </div>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
      </div>
      <div className="input_element">
        <select value={""} onChange={handleChange}>
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div className="input_element">
        <input
          onChange={handleChange}
          type="text"
          id="idNumber"
          name="idNumber"
          placeholder="xx-xxxxxxxxxxx"
        />
      </div>
    </form>
  );
};

export default DoctorRestisterPage;
