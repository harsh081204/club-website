import React, { useState, useEffect } from 'react';
import '../components/HeroSection.css';
import psit from "../assets/psit.png";
import footprint from "../assets/footprint.png";
import naac from "../assets/naac.png";
import Samarthyam from "../assets/Samarthyam.png";
import foot from "../assets/foot.webp";
import K25 from "../assets/K25.png";

const HeroSection = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-section">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden={index !== currentImageIndex}
          ></div>
        ))}
        <button className="carousel-button prev" onClick={handlePrev} aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>
        <button className="carousel-button next" onClick={handleNext} aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>

      <div className="hero-content">
        <div className="handprints-bg">
          <img src={foot} className="bigin" alt="Foot" />
          <img src={K25} className="bigan" alt="K25" />
          <img src={Samarthyam} className="bigun" alt="Samarthyam" />
          <p className="quote">
            "Unleash Your True Potential!"<br />
            Step up, show your strength, and prove<br />
            that capability knows no limits!<br/>
            <br/>
                Let The Timer Begin
          </p>


          

          <div className="sponsors-section">
            <div className="sponsors-logos">
              <img src={psit} alt="PSIT Kanpur" className="sponsor-logo" id="pslogo" />
              <img src={naac} alt="NAAC A+" className="sponsor-logo" id="nac" />
              <img src={footprint} alt="Footprints" className="sponsor-logo" id="footlogo" />
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="countdown-container">
        <CountdownTimer targetDate="2025-03-26T23:59:59" />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
     
      <div className="time-box">
        <span>{timeLeft.days || '0'}</span>
        <p>Days</p>
      </div>
      <div className="time-box">
        <span>{timeLeft.hours || '0'}</span>
        <p>Hours</p>
      </div>
      <div className="time-box">
        <span>{timeLeft.minutes || '0'}</span>
        <p>Minutes</p>
      </div>
      <div className="time-box">
        <span>{timeLeft.seconds || '0'}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
  
};

export default HeroSection;
