import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleClick = (e) => {
    dispatch(logout(e));
  };

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
          <li>
            <Link to="/disease">disease</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          {userInfo ? (
            <>
              <li>
                <Link to="/dashboard">dashboard</Link>
              </li>
              <li onClick={handleClick}>
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
    </div>
  );
};

export default Header;
