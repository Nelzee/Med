import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Login.css";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LoginPage = () => {
  const [validEmail, setValidEmail] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(true);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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
      case "password":
        setPwdFocus((pwdFocus) => !pwdFocus);
        setValidPwd(PWD_REGEX.test(credentials.password));
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
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Login</h2>
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

      <button
        disabled={validEmail && validPwd && credentials.email ? false : true}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
