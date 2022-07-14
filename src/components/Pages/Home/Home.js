import React from "react";
import "../../../App.css";
import Button from "../../Button/Button";
import "./Home.css";
import Logo from "../Home/BG.jpg";
// import Getstarted from "./Getstarted";
import { Link } from "react-router-dom";
import logo from "../Home/img-logo.png";

function Home() {
  return (
    <div className="hero-container">
      <img className="IMG1" src={Logo} alt="PIC" />
      <img src={logo} alt="logo" width="450px" />
      <br />
      <h1>.لبدأ التسوق الرجاء الضغط علي الازرار بالاسفل</h1>
      <br />
      <br />
      <div className="hero-btns">
        <Link to="/Create_Player">
          <Button> كاميرات متحركة</Button>
        </Link>
        <Link to="/Create_Player">
          <Button> كاميرات ثابتة</Button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
