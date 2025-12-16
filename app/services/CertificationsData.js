import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const CertificationsData = [
  {
    id: "register",
    title: " Financial Projections & Forecasting",
    desc: "Preparing forward-looking financial statements for planning or lenders.",
    icon: <FaBalanceScale />,
  },
  {
    id: "compliance",
    title: " CMA & Funding Packs",
    desc: "Structured financial submissions for banks and institutions.",
    icon: <FaGlobe />,
  },
  {
    id: "projections",
    title: "Feasibility Studies & Scenario Models",
    desc: "Assessing business ideas or projects through simple, realistic models.",
    icon: <FaExchangeAlt />,
  },
  {
    id: "filings",
    title: "Statutory Certifications",
    desc: "Turnover, net worth, provisional statements, and other required certificates.",
    icon: <FaFileInvoiceDollar />,
  },
];
