import {
  FaFileInvoice,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaGavel,
} from "react-icons/fa";

export const indirectTaxData = [
  {
    id: "gst-advisory",
    title: "GST Advisory & Planning",
    desc: "Clarity on classifications, rates, and positions for various transactions.",
    icon: <FaFileInvoice />,
  },
  {
    id: "gst-returns",
    title: "GST Return Execution",
    desc: "Coordinated preparation and filing of GST returns, ensuring completeness and timeliness.",
    icon: <FaClipboardList />,
  },
  {
    id: "recon",
    title: "Reconciliation & ITC Management",
    desc: "Detailed reconciliation of GST data to support accurate ITC reporting.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "audit",
    title: "GST Audits & Documentation",
    desc: "Support with audits and preparation of required records and workings.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "litigation",
    title: "Litigation & Representation",
    desc: "End to end assistance in managing notices, drafting responses, and supporting departmental interactions.",
    icon: <FaGavel />,
  },
];
