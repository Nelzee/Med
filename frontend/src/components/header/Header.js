import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
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
            <a href="">Home</a>
          </li>
          <li>
            <Link to="/disease">disease</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
