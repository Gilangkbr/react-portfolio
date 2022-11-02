import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gilangkbr99/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Gilangkbr" target="_blank">
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
