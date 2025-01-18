import React, { useState, useEffect } from 'react';
import '../components/HeroSection.css'

const HeroSection = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds
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
            className={`carousel-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden={index !== currentImageIndex} 
          ></div>
        ))}
        {/* Carousel Buttons */}
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
        <h2 className="welcome-text">Welcome to</h2>
        <h1>
          <span className="highlight">The Energy Club</span>
        </h1>
        <p>
        "Strength in Unity, Power in Teamwork, Victory in Sportsmanship! Together We Conquer, Together We Thrive, Every Effort Counts, Every Win is Ours!"
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
