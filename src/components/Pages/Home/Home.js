import React from "react";
import "../../../App.css";
import Button from "../../Button/Button";
import "./Home.css";
import Logo from "../Home/BG.jpg";
// import Getstarted from "./Getstarted";
import { Link } from "react-router-dom";
import logo from "../Home/img-logo.png";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

function Home() {
  return (
    <div className="hero-container">
      <img className="IMG1" src={Logo} alt="PIC" />
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
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
