"use client";
import React from "react";
import "./BookingDrawer.css";

const BookingDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`drawer-overlay ${open ? "visible" : ""}`}
      onClick={onClose} // Close on background click
    >
      <div
        className={`drawer-panel ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking on panel
      >
        <button className="drawer-close" onClick={onClose}>✕</button>

        <h2 className="drawer-title">Book a Consultation</h2>
        <p className="drawer-desc">
          Fill in your details and our team will contact you shortly.
        </p>

        <form className="drawer-form">
          <div className="drawer-field">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="drawer-field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="drawer-field">
            <label>Phone</label>
            <input type="tel" placeholder="+91..." />
          </div>

          <div className="drawer-field">
            <label>Your Requirement</label>
            <textarea placeholder="Briefly describe your requirement..." />
          </div>

          <button className="drawer-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingDrawer;
