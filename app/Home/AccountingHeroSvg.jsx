// AccountingHeroSvg.jsx
import React from "react";
import "./AccountingHeroSvg.css";

const AccountingHeroSvg = () => {
  return (
    <div className="hero-svg-wrapper">
      <svg
        className="hero-svg"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background card */}
        <rect
          x="40"
          y="40"
          width="320"
          height="200"
          rx="24"
          className="bg-card"
        />

        {/* Screen top bar */}
        <rect x="60" y="60" width="280" height="20" rx="10" className="top-bar" />
        <circle cx="80" cy="70" r="4" className="dot dot-red" />
        <circle cx="95" cy="70" r="4" className="dot dot-yellow" />
        <circle cx="110" cy="70" r="4" className="dot dot-green" />

        {/* Main screen */}
        <rect
          x="60"
          y="88"
          width="280"
          height="132"
          rx="18"
          className="screen"
        />

        {/* Bar chart */}
        <g className="chart-bars">
          <rect x="90" y="170" width="26" height="40" rx="6" className="bar bar-1" />
          <rect x="130" y="155" width="26" height="55" rx="6" className="bar bar-2" />
          <rect x="170" y="140" width="26" height="70" rx="6" className="bar bar-3" />
          <rect x="210" y="150" width="26" height="60" rx="6" className="bar bar-4" />
        </g>

        {/* Pie chart */}
        <g className="pie-chart">
          <circle cx="290" cy="130" r="32" className="pie-bg" />
          <path
            d="M290 98
               A32 32 0 0 1 320 130
               L290 130 Z"
            className="pie-slice"
          />
          <circle cx="290" cy="130" r="10" className="pie-center" />
        </g>

        {/* Ledger document */}
        <g className="ledger">
          <rect x="70" y="110" width="80" height="60" rx="10" className="ledger-bg" />
          <line x1="82" y1="125" x2="140" y2="125" className="ledger-line" />
          <line x1="82" y1="137" x2="140" y2="137" className="ledger-line" />
          <line x1="82" y1="149" x2="115" y2="149" className="ledger-line" />
        </g>

        {/* Coins */}
        <g className="coins">
          <g className="coin coin-1">
            <circle cx="110" cy="220" r="12" />
            <text x="110" y="224" textAnchor="middle" className="coin-text">
              ₹
            </text>
          </g>
          <g className="coin coin-2">
            <circle cx="140" cy="230" r="10" />
            <text x="140" y="234" textAnchor="middle" className="coin-text">
              ₹
            </text>
          </g>
        </g>

        {/* Floating tick badge */}
        <g className="tick-badge">
          <circle cx="320" cy="205" r="16" className="tick-bg" />
          <polyline
            points="314,205 319,210 328,200"
            className="tick-mark"
          />
        </g>
      </svg>
    </div>
  );
};

export default AccountingHeroSvg;
