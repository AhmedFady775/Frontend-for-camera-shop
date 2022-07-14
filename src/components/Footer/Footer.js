import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../navbar/img-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-media-wrap">
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            <img src={logo} alt="logo" width="100px" />
          </Link>
        </div>
        <small class="website-rights">S2V © 2022</small>
      </div>
    </div>
  );
}

export default Footer;
