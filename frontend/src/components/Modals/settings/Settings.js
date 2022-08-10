import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";
import "./Settings.css";

const Settings = ({ toggle }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {
    response: { firstName, lastName },
  } = userLogin;

  const handleLogout = (e) => {
    toggle(false);
    dispatch(logout(e));
  };

  return (
    <div className="modalBackground">
      <div className="settingsContainer">
        <div className="settingsHeader">
          <h3>{`${firstName} ${lastName}`}</h3>
          <span onClick={() => toggle(false)}>X</span>
        </div>
        <button onClick={() => handleLogout()}>logout</button>
      </div>
    </div>
  );
};

export default Settings;
