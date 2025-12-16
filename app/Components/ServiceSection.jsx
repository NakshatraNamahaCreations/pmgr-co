import React from "react";
import "./ServiceSection.css";

const services = [
  {
    id: 1,
    title: "Statutory Audits",
    desc: "Companies, Banks, Insurance, NIDHI Companies",
    category: "Audit",
  },
  {
    id: 2,
    title: "Internal Audits",
    desc: "Comprehensive operational control assessments",
    category: "Audit",
  },
  {
    id: 3,
    title: "SOX Audits",
    desc: "Sarbanes-Oxley compliance and testing",
    category: "Audit",
  },
  {
    id: 4,
    title: "Process Audits",
    desc: "End-to-end operational process reviews",
    category: "Operations",
  },
  {
    id: 5,
    title: "Tax Audits",
    desc: "Section 44AB compliance and advisory",
    category: "Tax",
  },
  {
    id: 6,
    title: "Management Audits",
    desc: "Strategic and operational effectiveness audits",
    category: "Management",
  },
  {
    id: 7,
    title: "GST & Taxation",
    desc: "GST compliance, returns, and advisory",
    category: "Tax",
  },
  {
    id: 8,
    title: "Advisory Services",
    desc: "Financial planning, systems, and compliance",
    category: "Advisory",
  },
];

const ServiceSection = () => {
  return (
    <section className="svc-section">
      <div className="svc-inner">
        <div className="svc-header">
          <h2 className="svc-title">Our Service Portfolio</h2>
          <p className="svc-subtitle">
            A focused mix of audit, tax, GST and advisory services, built to
            strengthen governance and support confident decision-making.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((service) => (
            <article key={service.id} className="svc-card">
              <header className="svc-card__header">
                <span className="svc-card__pill">{service.category}</span>
                <span className="svc-card__index">
                  {service.id.toString().padStart(2, "0")}
                </span>
              </header>

              <div className="svc-card__body">
                <h3 className="svc-card__title">{service.title}</h3>
                <p className="svc-card__desc">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
