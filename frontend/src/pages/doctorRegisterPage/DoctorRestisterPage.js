import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import "./DoctorRegisterPage.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const DoctorRestisterPage = () => {
  const isMounted = useRef(false);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(true);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(true);

  const [errMsg, setErrMsg] = useState("");

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    idNumber: "",
    type: "",
  });

  const handleChange = (e) => {
    setCredentials((credentials) => {
      return { ...credentials, [e.target.name]: e.target.value };
    });
  };

  const handleFocus = (e) => {
    setEmailFocus((emailFocus) => !emailFocus);
    setValidEmail(EMAIL_REGEX.test(credentials.email));
  };

  console.log(validEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <form className="docRegForm" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
        {validEmail ? "" : <p>this email is not valid</p>}
        {validEmail}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
      </div>
      <Select options={options} />
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
      <span></span>
      <button>Submit</button>
    </form>
  );
};

export default DoctorRestisterPage;
