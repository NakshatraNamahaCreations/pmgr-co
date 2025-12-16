"use client";
import React from "react";
import "./HomePage.css"; 
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <header className="site-header">
        <div className="navbar">
          <div className="logo">
            <div className="logo-icon"></div>
            <Link href="/">
            <span className="logo-text"><Image src="/images/CA-India-logo.png" width={60} height={50} alt="logo"/></span>  </Link>
            <Link href="/">
            <div className="logo-text">
        <span className="main-title">PMGR & Co</span>
        <span className="sub-title">Chartered Accountants</span>      
    </div>
    </Link>
          </div>

      

<nav className="nav-links">
  <Link href="/">Home</Link>
  <Link href="/services">Our Services</Link>
  <Link href="/team">Our Team</Link>
  <Link href="/contact">Contact Us</Link>
  <Link href="/insights">Insights</Link>
</nav>

        </div>
      </header>



      {/* Hero + Cards */}
      {/* <section className="hero-section">
     

        {/* Cards overlapping bottom */}
   {/* <div className="hero-feature-box" data-aos="fade-up">

  {/* Left Content */}
 {/*} <div className="hero-feature-left">
    <h3>Smart financial decisions
start with expert guidance.</h3>

 
  </div>

  {/* Right Floating Boxes */}
 {/*} <div className="hero-feature-services">

    <div className="hero-feature-service-box">
      <span className="hero-feature-icon"><FaUsers /></span>
      <h6>2000+</h6>
      <p>Clients</p>
    </div>

    <div className="hero-feature-service-box">
      <span className="hero-feature-icon"><FaMedal /></span>
      <h6>3+</h6>
      <p>Years in Practise</p>
    </div>

    <div className="hero-feature-service-box">
      <span className="hero-feature-icon"><FaBullseye /></span>
      <h6>100%</h6>
      <p>Client Focus</p>
    </div>

  </div>
</div> */}


    {/*}  </section> */}
    </>
  );
};

export default HomePage;
