import React from "react";
import "./experience.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiPhp, SiMysql, SiCodeigniter, SiHtml5, SiCss3 } from "react-icons/si";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
          </div>
        </div>
        {/*END of Front End*/}
        <div className="experience__backend">
          <h3>Backend-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCodeigniter className="experience__details-icon" />
              <div>
                <h4>CodeIgniter</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
