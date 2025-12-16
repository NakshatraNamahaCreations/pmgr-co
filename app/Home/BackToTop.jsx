"use client"
import { useState, useEffect } from "react";
import "./BackToTop.css";
import { FaChevronCircleUp, FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {visible && (
        <button className="scrollTopBtn" onClick={scrollTop}>
          <FaChevronUp size={15}/>
        </button>
      )}
    </>
  );
}
