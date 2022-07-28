import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Settings from "../Modals/settings/Settings";
import "./header.css";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const [settings, showSettings] = useState(false);
  const { userInfo } = userLogin;

  return (
    <div>
      <nav id="nav_container">
        <Link to="/">
          <div className="logo">
            <h3>
              medi<span>care</span>
            </h3>
          </div>
        </Link>

        <ul id="nav_items">
          <li>
            <Link to="/">home</Link>
          </li>
          {userInfo ? (
            <>
              <li>
                <Link to="/dashboard">dashboard</Link>
              </li>
              <li onClick={() => showSettings(true)}>
                <span>{userInfo.firstName}</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
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
