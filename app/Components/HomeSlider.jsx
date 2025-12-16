"use client"

import Slider from "react-slick";
import "./Header.css"

const slides = [
  {
    id: 1,
    title: "Simplifying Taxes, Audits & Compliance for You",
    text: "We deliver precise financial insights, streamlined accounting, and compliant reporting—empowering leaders to make informed decisions with confidence and long-term vision.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    title: "Strategic Accounting for Confident Decision-Making",
    text: "We provide precise financial insights, streamlined accounting, and proactive guidance—helping businesses move forward with confidence and strategic control.",
    image:
      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    fade: true,
  };

  return (
    <section id="home" className="hero-section">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay" />
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">Read more</button>
                  <button className="btn btn-outline">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlider;
