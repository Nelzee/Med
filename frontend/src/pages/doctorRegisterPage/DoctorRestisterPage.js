import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Select from "react-select";
import "./DoctorRegisterPage.css";

const options = [
  { value: "General Practitioner", label: "General Practitioner" },
  { value: "Specialist", label: "Specialist" },
];

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const NAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ID_REGEX = /^(\d{2})-(\d{6})(\d?)([a-zA-Z]{1})(\d{2})/;

const DoctorRestisterPage = () => {
  const [validFirstName, setValidFirstName] = useState(true);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [validLastName, setValidLastName] = useState(true);
  const [LastNameFocus, setLastNameFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(true);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(true);
  const [matchFocus, setMatchFocus] = useState(false);

  const [validId, setValidId] = useState(true);
  const [idFocus, setIdFocus] = useState(false);

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

  const handleFocus = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailFocus((emailFocus) => !emailFocus);
        setValidEmail(EMAIL_REGEX.test(credentials.email));
        break;
      case "firstName":
        setFirstNameFocus((LastNameFocus) => !LastNameFocus);
        setValidFirstName(NAME_REGEX.test(credentials.firstName));
        break;
      case "lastName":
        setLastNameFocus((LastNameFocus) => !LastNameFocus);
        setValidLastName(NAME_REGEX.test(credentials.lastName));
        break;
      case "password":
        setPwdFocus((pwdFocus) => !pwdFocus);
        setValidPwd(PWD_REGEX.test(credentials.password));
        break;
      case "confirmPassword":
        setMatchFocus((matchFocus) => !matchFocus);
        setValidMatch(credentials.password === credentials.confirmPassword);
        break;
      case "idNumber":
        setIdFocus((idFocus) => !idFocus);
        setValidId(ID_REGEX.test(credentials.idNumber));
        break;

      default:
        break;
    }
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
        {validFirstName ? "" : <p>Please enter name</p>}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first Name"
        />
      </div>
      <div className="input_element">
        {validLastName ? "" : <p>Please enter your last name</p>}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last Name"
        />
      </div>
      <div className="input_element">
        {validEmail ? "" : <p>this email is not valid</p>}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
      </div>
      <Select options={options} defaultValue={options[0]} />
      <div className="input_element">
        {validPwd ? (
          ""
        ) : (
          <p>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        )}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div className="input_element">
        {validMatch ? "" : <p>this password does not match the first one</p>}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div className="input_element">
        {validId ? "" : <p>Invalid Id Number</p>}
        <input
          onChange={handleChange}
          onBlur={handleFocus}
          type="text"
          id="idNumber"
          name="idNumber"
          placeholder="xx-xxxxxxxxxxx"
        />
      </div>
      <button
        disabled={
          validEmail &&
          validFirstName &&
          validLastName &&
          validId &&
          validPwd &&
          validMatch &&
          credentials.firstName
            ? false
            : true
        }
      >
        Submit
      </button>
    </form>
  );
};

export default DoctorRestisterPage;
