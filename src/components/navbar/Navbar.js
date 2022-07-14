import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../navbar/img-logo.png";
import Cart from "../navbar/Cart.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="cart" to="Cart">
            <img src={Cart} alt="logo" width="80px" />
          </Link>
          <div className="buttons__cont">
            <Link to="/Character_Item">
              <Button buttonStyle="btn--outline">Sign in</Button>
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="" className="nav-links">
                كاميرات متحركة
              </Link>
            </li>
            <li>
              <Link to="" className="nav-links">
                كاميرات ثابتة
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                الرئيسية
              </Link>
            </li>
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" width="80px" />
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
