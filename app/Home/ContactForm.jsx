"use client";
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your API / email service
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phoneCode:"+91",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="ca-contact-section" id="2">
      <div className="ca-contact-inner">
        {/* LEFT SIDE - info */}
        <div className="ca-contact-info">
          {/* <span className="ca-contact-kicker">Contact Us</span> */}
           <h2 className="ca-contact-title">
           Contact Us
          </h2> 
          <p className="ca-contact-text">
            Every set of numbers reflects a journey; the choice made, the risk taken, and the opportunities ahead. Your message helps us understand where you are on that journey and how we can support you.<br/>Submit your requirement, someone from our team will reach out within the next 24-48 hours to walk you through the process and outline what comes next. 
          </p>

          {/* <div className="ca-contact-details">
            <div>
              <h4>Office</h4>
              <p>
                373/3, Mettupalayam Road, Near FACT, Coimbatore North, Coimbatore - 641043
              </p>
            </div>
            <div>
              <h4>Email</h4>
              <p>casrivaibhav@gmail.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 7010341301</p>
            </div>
          </div> */}
        </div>

        {/* RIGHT SIDE - form */}
        <div className="ca-contact-form-wrapper">
          <form className="ca-contact-form" onSubmit={handleSubmit}>
            <div className="ca-form-row">
              <div className="ca-form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ca-form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

           <div className="ca-form-row">
  <div className="ca-form-field">
    <label htmlFor="phoneCode">Code *</label>
    <select
      id="phoneCode"
      name="phoneCode"
      value={formData.phoneCode}
      onChange={handleChange}
      required
    >
      <option value="+91">🇮🇳 +91 </option>
      <option value="+1">🇺🇸 +1 </option>
      <option value="+44">🇬🇧 +44 </option>
      <option value="+61">🇦🇺 +61 </option>
      <option value="+971">🇦🇪 +971 </option>
      <option value="+65">🇸🇬 +65 </option>
      <option value="+81">🇯🇵 +81 </option>
      <option value="+27">🇿🇦 +27 </option>
    </select>
  </div>


  <div className="ca-form-field">
    <label htmlFor="phone">Phone Number *</label>
    <input
      id="phone"
      name="phone"
      type="tel"
      placeholder=""
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>
</div>

<div className="ca-form-row">
<div className="ca-form-field">
    <label htmlFor="subject">Service / Subject</label>
    <select
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
    >
      <option value="">Select an option</option>
      <option value="audit">Audit & Assurance</option>
      <option value="tax">Tax & Compliance</option>
      <option value="advisory">Business Advisory</option>
      <option value="incorporation">Company Incorporation</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div className="ca-form-field">
    <label htmlFor="phone">Organization *</label>
    <input
      id="phone"
      name="phone"
      type="tel"
      placeholder=""
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>
</div>

            <div className="ca-form-field">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Describe your requirement…"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="ca-submit-btn">
              Request a Consultation
            </button>

            <p className="ca-form-note">
              By submitting this form, you agree to be contacted by our team for
              the purpose of this enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
