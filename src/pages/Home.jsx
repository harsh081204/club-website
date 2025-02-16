import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import homebg1 from '../assets/homebg1.jpg'
import homebg2 from '../assets/homebg2.jpg'
import homebg3 from '../assets/homebg3.jpg'
import footprintbg from '../assets/landingpage.png'
const Home = () => {

  const carouselImages = [
    footprintbg,homebg1, homebg2, homebg3
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection images={carouselImages} />
      
      <Footer/>
    </div>
  );
};

export default Home;
