import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const FinancialAnalysisData = [
  {
    id: "register",
    title: " Performance Dashboards",
    desc: "Visual summaries that show how the business is performing.",
    icon: <FaBalanceScale />,
  },
  {
    id: "compliance",
    title: "Profitability & Cost Analysis",
    desc: "Identifying and interpreting products or services that generate value.",
    icon: <FaGlobe />,
  },
  {
    id: "projections",
    title: "KPI Tracking & Trend Insights",
    desc: "Monitoring key indicators to guide business decisions.",
    icon: <FaExchangeAlt />,
  },
  {
    id: "filings",
    title: "Cash Flow & Working Capital Analytics",
    desc: "Highlighting liquidity patterns and areas for improvement through detailed business study.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "processes",
    title: " Management Reporting",
    desc: "Presenting insights in a clear, decision-friendly format.",
    icon: <FaGavel />,
  },
];
