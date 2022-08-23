import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Settings from "../Modals/settings/Settings";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);

  const [settings, showSettings] = useState(false);
  const { response } = userLogin;

  return (
    <div>
      <nav id="nav_container">
        <Link to="/">
          <div className="nav_logo">
            <h2>
              med<span>i</span>care
            </h2>
          </div>
        </Link>

        <ul id="nav_items">
          <li>
            <Link to="/">Home</Link>
          </li>
          {response ? (
            <>
              {response.role === "user" ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/appointments">Appointments</Link>
                  </li>
                  <li
                    className="settingsToggle"
                    onClick={() => showSettings(true)}
                  >
                    <span>{response.firstName}</span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/organdonors">Organ Donors</Link>
                  </li>
                  <li
                    className="settingsToggle"
                    onClick={() => showSettings(true)}
                  >
                    <span>{response.firstName}</span>
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {settings && <Settings toggle={showSettings} />}
    </div>
  );
};

export default Header;
