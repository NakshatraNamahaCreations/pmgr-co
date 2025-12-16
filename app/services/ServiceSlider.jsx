// "use client";

// import React, { useEffect, useState } from "react";
// import styles from "./ServiceSlider.module.css";
// import SubServiceSlider from "./SubServiceSlider";
// import BookingDrawer from "../Home/BookingDrawer"

// import {
//   FaBalanceScale,
//   FaGlobe,
//   FaFileAlt,
//   FaShieldAlt,
//   FaRocket,
//   FaUserTie,
//   FaCalculator,
//   FaChartBar,
//   FaCertificate,
// } from "react-icons/fa";

// import { directTaxData } from "./DirectTaxData";
// import { indirectTaxData } from "./IndirectTaxData";
// import { auditData } from "./AuditData";
// import { riskgovernanceData } from "./RiskGovernanceData";
// import { ComplianceData } from "./ComplianceData";
// import { accountingSupportData } from "./AccountingSupportData";
// import { FinancialAnalysisData } from "./FinancialAnalysisData";
// import { cfoData } from "./CfoData";
// import { CertificationsData } from "./CertificationsData";

// const services = [
//   { id: "direct-tax", label: "Direct Tax Advisory", icon: <FaBalanceScale /> },
//   { id: "indirect-tax", label: "Indirect Tax & GST", icon: <FaGlobe /> },
//   { id: "audit", label: "Audit & Assurance", icon: <FaFileAlt /> },
//   { id: "controls", label: "SOX & Risk Governance", icon: <FaShieldAlt /> },
//   { id: "startup", label: "Start-Up Enablement", icon: <FaRocket /> },
//   { id: "vcfo", label: "Virtual CFO", icon: <FaUserTie /> },
//   { id: "operations", label: "Finance Operations", icon: <FaCalculator /> },
//   { id: "analytics", label: "Business Intelligence", icon: <FaChartBar /> },
//   { id: "modelling", label: "Financial Modelling", icon: <FaCertificate /> },
// ];

// const sliderMap = {
//   "direct-tax": directTaxData,
//   "indirect-tax": indirectTaxData,
//   "audit": auditData,
//   "controls": riskgovernanceData,
//   "startup": ComplianceData,
//   "vcfo": cfoData,
//   "operations": accountingSupportData, 
//   "analytics": FinancialAnalysisData,
//   "modelling": CertificationsData,
// };

// export default function ServiceSlider() {
//   const [active, setActive] = useState(services[0].id);
//   const [open, setOpen] = useState(false);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActive(entry.target.id);
//         });
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );

//     services.forEach((s) => {
//       const el = document.getElementById(s.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* SCROLLSPY NAV */}
//       <aside className={styles.spyNav}>
//         {services.map((s) => (
//           <button
//             key={s.id}
//             className={`${styles.spyItem} ${
//               active === s.id ? styles.active : ""
//             }`}
//             onClick={() => scrollTo(s.id)}
//           >
//             {s.label}
//           </button>
//         ))}
//       </aside>

//       {/* CONTENT */}
//       <div className={styles.content}>
//         {services.map((s) => (
//           <section key={s.id} id={s.id} className={styles.serviceSection}>
//             {/* HEADING WITH ICON */}
//             <h2 className={styles.sectionHeading}>
           
//               {s.label}
//             </h2>

//             {/* <p className={styles.sectionDesc}>
//               Detailed description content for <strong>{s.label}</strong> goes
//               here. This section expands with explanations, scope, and value
//               delivered.
//             </p> */}

//             {sliderMap[s.id] && (
//               <div className={styles.subSliderWrap}>
//                 <SubServiceSlider data={sliderMap[s.id]} />
//               </div>
//             )}
//           </section>
//         ))}
//           <p className={styles.para}>Would you like to explore how these services fit your needs?</p>
//           <button className={styles.bookbtn} onClick={() => setOpen(true)}>Book a Consultation</button>
//       </div>
//         <BookingDrawer open={open} onClose={() => setOpen(false)} />
    
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import styles from "./ServiceSlider.module.css";
import SubServiceSlider from "./SubServiceSlider";
import BookingDrawer from "../Home/BookingDrawer";

import {
  FaBalanceScale,
  FaGlobe,
  FaFileAlt,
  FaShieldAlt,
  FaRocket,
  FaUserTie,
  FaCalculator,
  FaChartBar,
  FaCertificate,
} from "react-icons/fa";

import { directTaxData } from "./DirectTaxData";
import { indirectTaxData } from "./IndirectTaxData";
import { auditData } from "./AuditData";
import { riskgovernanceData } from "./RiskGovernanceData";
import { ComplianceData } from "./ComplianceData";
import { accountingSupportData } from "./AccountingSupportData";
import { FinancialAnalysisData } from "./FinancialAnalysisData";
import { cfoData } from "./CfoData";
import { CertificationsData } from "./CertificationsData";

const services = [
  { id: "direct-tax", label: "Direct Tax Advisory", icon: <FaBalanceScale /> },
  { id: "indirect-tax", label: "Indirect Tax & GST", icon: <FaGlobe /> },
  { id: "audit", label: "Audit & Assurance", icon: <FaFileAlt /> },
  { id: "controls", label: "SOX & Risk Governance", icon: <FaShieldAlt /> },
  { id: "startup", label: "Start-Up Enablement", icon: <FaRocket /> },
  { id: "vcfo", label: "Virtual CFO", icon: <FaUserTie /> },
  { id: "operations", label: "Finance Operations", icon: <FaCalculator /> },
  { id: "analytics", label: "Business Intelligence", icon: <FaChartBar /> },
  { id: "modelling", label: "Financial Modelling", icon: <FaCertificate /> },
];

const sliderMap = {
  "direct-tax": directTaxData,
  "indirect-tax": indirectTaxData,
  audit: auditData,
  controls: riskgovernanceData,
  startup: ComplianceData,
  vcfo: cfoData,
  operations: accountingSupportData,
  analytics: FinancialAnalysisData,
  modelling: CertificationsData,
};

export default function ServiceSlider() {
  const [active, setActive] = useState(services[0]);
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      {/* HORIZONTAL TABS */}
      <div className={styles.tabs}>
        {services.map((s) => (
          <button
            key={s.id}
            className={`${styles.tab} ${
              active.id === s.id ? styles.active : ""
            }`}
            onClick={() => setActive(s)}
          >
            <span className={styles.icon}>{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {active.icon}
          <span>{active.label}</span>
        </h2>

        {sliderMap[active.id] && (
          <SubServiceSlider data={sliderMap[active.id]} />
        )}

        <p className={styles.para}>
          Would you like to explore how these services fit your needs?
        </p>

        <button className={styles.bookbtn} onClick={() => setOpen(true)}>
          Book a Consultation
        </button>
      </div>

      <BookingDrawer open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
