import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const auditData = [
  {
    id: "audits",
    title: " Statutory & Tax Audits",
    desc: "Independent verification of financial statements and compliance with audit requirements.",
    icon: <FaBalanceScale />,
  },
  {
    id: "process-audits",
    title: "Internal & Process Audits",
    desc: "Review of processes and controls to strengthen efficiency and reliability.",
    icon: <FaGlobe />,
  },
  {
    id: "manage audits",
    title: "Management Audits",
    desc: "Evaluating key operational areas to help leadership make informed decisions.",
    icon: <FaExchangeAlt />,
  },
  {
    id: "system audits",
    title: "Systems Audits",
    desc: "Assessment of system-driven controls and checks within financial processes.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "forensic audit",
    title: "Forensic Audits",
    desc: "Identifying irregularities and reviewing records to strengthen transparency and control.",
    icon: <FaGavel />,
  },
   {
    id: "puspose audit",
    title: "Special Purpose Audits",
    desc: "Focused audit procedures performed for specific reporting needs.",
    icon: <FaGavel />,
  },
];
