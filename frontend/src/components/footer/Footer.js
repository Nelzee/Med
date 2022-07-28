import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContentContainer">
        <div className="footerLogo">
          <h2>
            mad<span>i</span>care
          </h2>
        </div>
        <div className="footerLinks">
          <ul>
            <li>
              <Link to="/doctorReg">Register as doctor</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
