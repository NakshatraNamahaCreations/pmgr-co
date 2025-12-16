"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./FloatingButton.css";
import BookingDrawer from "./BookingDrawer";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let observer;
    let interval;

    const attachObserver = () => {
      const targets = document.querySelectorAll(
        "footer, .hh-hero-slider"
      );

      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const shouldHide = entries.some(
            (entry) => entry.isIntersecting
          );
          setHideButton(shouldHide);
        },
        { threshold: 0.05 }
      );

      targets.forEach((el) => observer.observe(el));
    };

    // Wait until DOM elements exist (important for route changes)
    interval = setInterval(() => {
      const footer = document.querySelector("footer");
      const banner = document.querySelector(".hh-hero-slider");

      if (footer || banner) {
        attachObserver();
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      observer && observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className={`vertical-consult-btn ${hideButton ? "hidden-btn" : ""}`}>
        <button className="vertical-btn" onClick={() => setOpen(true)}>
          Book a Consultation
        </button>
      </div>

      <BookingDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
