import React from "react";
import "./header.css";
import CTA from "./CTA";
import profilePict from "../../assets/profilpict.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My Name is</h5>
        <h1>Gilang Ananda Akbar</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={profilePict} alt="Profile Pict" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
