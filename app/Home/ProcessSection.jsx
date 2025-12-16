"use client";
import React from "react";
import "./ProcessSection.css";
import { FaSearch, FaPuzzlePiece, FaLightbulb, FaTasks, FaSync } from "react-icons/fa";

const steps = [
  { label: "Discovery and Consultation",desc:"We begin by thoroughly understanding your business, challenge, and objectives through in-depth consultations.", icon: <FaSearch /> },
  { label: "Strategy and Planning",desc:"Based on the discovery phase, we develop tailored strategies and detailed plans to address your specific needs.", icon: <FaPuzzlePiece /> },
  { label: "Implementation and Execution",desc:"Our expert team puts the plan into action , leveraging digital tools and best practices for efficient execution", icon: <FaLightbulb /> },
  { label: "Review and Optimization",desc:"We continuously monitor progress, review outcomes, and optimize strategies to ensure lasting success and value", icon: <FaTasks /> },
];

const formatStepNumber = (n) => (n < 10 ? `0${n}` : n);

const ProcessSection = () => {
  return (
    <section className="pf-section">
      <div className="pf-inner">
        <div className="pf-header" data-aos="fade-up">
          <span className="pf-kicker">Our Approach</span>
          <h2 className="pf-title">Our Working Process</h2>
          <p className="pf-subtitle">
           A well defined process built to provide insight, direction, and measurable progress over time.
          </p>
        </div>

        <div className="pf-steps-wrapper">
          {/* gradient line behind steps */}
          <div className="pf-steps-line" />

          <div className="pf-steps">
            {steps.map((step, index) => (
              <div className="pf-step" key={step.label}>
                <div className="pf-step-inner">
                  {/* Circle with number & icon */}
                  <div className="pf-circle-wrapper">
                    <div className="pf-circle">
                      <span className="pf-step-number-inside">
                        {formatStepNumber(index + 1)}
                      </span>
                      <span className="pf-step-icon">{step.icon}</span>
                    </div>
                  </div>

                  <p className="pf-step-label">{step.label}</p>
                  <p className="pf-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
