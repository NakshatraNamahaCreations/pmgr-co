import {
  FaBalanceScale,
  FaGlobe,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const directTaxData = [
  {
    id: "advisory",
    title: "Tax Advisory & Planning",
    desc: "Guidance on managing tax positions, planning ahead, and meeting tax obligations smoothly.",
    icon: <FaBalanceScale />,
  },
  {
    id: "nri",
    title: "NRI & International Taxation",
    desc: "Support with global income, DTAA interpretation, and tax responsibilities for NRIs.",
    icon: <FaGlobe />,
  },
  {
    id: "tp",
    title: "Transfer Pricing",
    desc: "Preparation of documentation and reviews to ensure arm’s-length pricing and compliance.",
    icon: <FaExchangeAlt />,
  },
  {
    id: "compliance",
    title: "Tax Compliance Management",
    desc: "Preparation and filing of tax returns with accurate computations and documentation.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "representation",
    title: "Assessments & Representation",
    desc: "End to end assistance in preparing replies and supporting proceedings before tax authorities.",
    icon: <FaGavel />,
  },
];
