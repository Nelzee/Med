import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loding, error, userInfo } = userLogin;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div id="login_screen">
      <h1>Welcome to Medicare</h1>
      <h2>Enter Credentials to login</h2>
      <div id="login_container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            name="username"
            placeholder="username"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
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
