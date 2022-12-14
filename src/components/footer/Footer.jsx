import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        GILANG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/gilangananda.akbar/">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/gilangkbr_/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gilang Ananda Akbar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
