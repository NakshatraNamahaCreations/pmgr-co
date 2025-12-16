import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const accountingSupportData = [
  {
    id: "audits",
    title: "Bookkeeping & Monthly Accounting",
    desc: "Ensuring entries, records, and accounts are updated correctly.",
    icon: <FaBalanceScale />,
  },
  {
    id: "process-audits",
    title: "Monthly Close & Reconciliation",
    desc: "Completing month-end processes and matching accounts accurately.",
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
    title: " Documentation & Compliance Records",
    desc: "Maintaining proper documentation aligned with statutory expectations.",
    icon: <FaGavel />,
  },
   {
    id: "puspose audit",
    title: "Audit Preparation Support",
    desc: "Ensuring ledgers, schedules, and records are ready for audits.",
    icon: <FaGavel />,
  },
];
