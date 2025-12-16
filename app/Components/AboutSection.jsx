import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-firm">
      <div className="about-firm__inner">

        {/* Intro Section Row */}
        <div className="about-firm__intro-row">
          <div className="about-firm__intro-left">
            <h2 className="about-firm__title">About PMGR & Co</h2>
            <p className="about-firm__text">
              Established Chartered Accountants firm based in South India with
              expertise in financial advisory, statutory compliance, and
              strategic business solutions.
            </p>
          </div>

          <div className="about-firm__intro-right">
            <button className="about-firm__btn">Read More</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-firm__grid">
          <div className="about-card">
            <div className="about-card__badge">01</div>
            <h3 className="about-card__title">6+ CAs</h3>
            <p className="about-card__subtitle">
              All ICAI members with specialized expertise.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card__badge">02</div>
            <h3 className="about-card__title">2000+ Clients</h3>
            <p className="about-card__subtitle">
              Serving Automobile, Manufacturing, Hospital, Agro and more.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card__badge">03</div>
            <h3 className="about-card__title">4+ Years</h3>
            <p className="about-card__subtitle">
              Collective practice and employment experience.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card__badge">04</div>
            <h3 className="about-card__title">3 Locations</h3>
            <p className="about-card__subtitle">
              Enhanced accessibility across South India.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
