import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav id="nav_container">
        <div className="logo">
          <h3>
            medi<span>care</span>
          </h3>
        </div>
        <ul id="nav_items">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Mission</a>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <a href="">Signup</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
