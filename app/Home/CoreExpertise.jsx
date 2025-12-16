"use client";
import React, { useState } from "react";
import "./CoreExpertise.css";
import {
  FaRegCreditCard,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const expertiseItems = [
  {
    title: "Financial Reporting & IND AS",
    text: "Implementation, convergence and advanced reporting support.",
    icon: <FaRegCreditCard />,
  },
  {
    title: "Compliance & Regulatory Advisory",
    text: "End-to-end compliance across tax, corporate, and regulatory laws.",
    icon: <FaChartLine />,
  },
  {
    title: "Risk, Controls & IT Assurance",
    text: "SOX, IFC, IT audits and enterprise risk assessments.",
    icon: <FaLightbulb />,
  },
  {
    title: "Fraud & Forensic Advisory",
    text: "Investigations, digital analysis and fraud risk prevention.",
    icon: <FaShieldAlt />,
  },
];

const CoreExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="split-section">
      <div className="split-container">

        {/* HEADER */}
        <div className="split-header" data-aos="fade-up">
          <span className="split-kicker">Core Expertise</span>
          <h2 className="split-title">Core Competencies & Expertise</h2>
          <p className="split-subtitle">
            Focused expertise delivered through structured thinking,
            compliance discipline, and risk-aware execution.
          </p>
        </div>

        {/* SPLIT SCREEN */}
        <div className="split-layout">

          {/* LEFT ACCORDION */}
          <div className="split-left">
            {expertiseItems.map((item, index) => (
              <button
                key={index}
                className={`split-tab ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="tab-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="tab-title">{item.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="split-right" data-aos="fade-up">
            <div className="split-content-card">
              <div className="split-icon">
                {expertiseItems[activeIndex].icon}
              </div>

              <h3>{expertiseItems[activeIndex].title}</h3>
              <p>{expertiseItems[activeIndex].text}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
