import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const ComplianceData = [
  {
    id: "register",
    title: "Entity Formation & Registration",
    desc: "Assistance in choosing and setting up the right business structure.",
    icon: <FaBalanceScale />,
  },
  {
    id: "compliance",
    title: "Early-Stage Compliance Setup",
    desc: "Creating simple compliance calendars and routines for new businesses.",
    icon: <FaGlobe />,
  },
  {
    id: "projections",
    title: "Financial Projections for Investors",
    desc: "Preparing projections and structured packs for funding discussions.",
    icon: <FaExchangeAlt />,
  },
  {
    id: "filings",
    title: "ROC & MCA Filings",
    desc: "Support with routine filings and record maintenance for companies and LLPs.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "processes",
    title: "Operational Policies & Processes",
    desc: "Basic documentation frameworks to help start-ups scale smoothly.",
    icon: <FaGavel />,
  },
];
