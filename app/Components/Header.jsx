"use client";
import Link from "next/link";
import { useState } from "react";
import "./Header.css"
import { FaClock, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Top info bar */}
    {/*}  <div className="top-bar">
        <div className="top-bar-left">
          <span><FaLocationArrow/> 254 Street Avenue, Los Angeles, LA 2415 US</span>
          <span><FaClock/> Mon - Fri : 09:00 - 17:00</span>
          <span><FaPhoneAlt/> 9765432108</span>
        </div>
       
      </div>*/}

      {/* Main navbar */}
      <nav className="nav">
       <div className="nav-logo">
    <Image 
        src="/images/CA-India-logo.png" 
        width={80} 
        height={60} 
        alt="logo"
        className="logo-img"
    />

    <div className="logo-text">
        <span className="main-title">VS Vaibhav & Co</span>
        <span className="sub-title">Chartered Accountant</span>
    </div>
</div>


        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="#/" className="nav-link">Home</Link>
          <Link href="#about" className="nav-link">About Us</Link>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#blog" className="nav-link">Blog</Link>
          <Link href="#contact" className="nav-link">Contact Us</Link>
        </div>

        <div className="nav-socials">
          <a href="#" aria-label="Facebook"><FaFacebook/></a>
          <a href="#" aria-label="Twitter"><FaTwitter/></a>
          <a href="#" aria-label="Google+"><FaInstagram/></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
