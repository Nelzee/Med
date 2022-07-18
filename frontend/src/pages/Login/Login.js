import React, { useState } from "react";

import "./Login.css";
const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    usernamge: "",
    password: "",
  });

  const validityCheck = (e) => {
    console.log(history);
    setCredentials((credentials) => {
      return { ...credentials, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="login_screen">
      <h1>Welcome to Medicare</h1>
      <h2>Enter Credentials to login</h2>
      <div id="login_container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={validityCheck}
            value={credentials.username}
            name="username"
            placeholder="username"
          />
          <input
            type="password"
            onChange={validityCheck}
            value={credentials.password}
            name="password"
            placeholder="password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
