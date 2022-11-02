import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Portfolio 1" />
          </div>
          <h3>Daiva Leather E-Commerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Portfolio 1" />
          </div>
          <h3>Daiva Leather E-Commerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
