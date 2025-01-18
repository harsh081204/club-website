import React from "react";
import "../pages/About.css";
import creative from "../assets/creative.webp"


const Card = ({ name, role, image }) => {
  return (
    <div className="card">
      <img src={image} alt="background" className="card-image" />
      <div className="card-text">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

const About = () => {
  const people = [
    { name: "Aryan Singh", role: "Designer", image: "/ishu.jpg" },
    { name: "Riya Sharma", role: "Developer", image: "/ishu.jpg" },
    { name: "Karan Verma", role: "Tester", image: "/ishu.jpg" },
    { name: "Sneha Patel", role: "Manager", image: "/ishu.jpg" },
    { name: "Rahul Jain", role: "Engineer", image: "/ishu.jpg" },
    { name: "Priya Mehta", role: "Analyst", image: "/ishu.jpg" },
    { name: "Amit Kumar", role: "Researcher", image: "/ishu.jpg" },
    { name: "Neha Gupta", role: "Data Scientist", image: "/ishu.jpg" }
  ];
   
  const ishver = [
    { name: "Shantanu", role: "Technical-Team head", image: "/ishu.jpg" },
    { name: "Ishver Chandra Jaiswal", role: "Web-Developer", image: "/Members/my-image.png" },
    { name: "Harshvardhan Singh", role:"Web-Developer", image: "/ishu.jpg" },
    { name: "Lakshya Keshwani", role: "Member", image: "/Members/lakshya.jpg" },
    
  ];


  return (
    <div>
      
      <div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">01</h1>
        <div className="team-description">
          <h2>Creative Team</h2>
          <p>
            The Creative Team of our Energy Club brings vibrant ideas to life, blending sports and innovation to inspire, engage, and energize members through dynamic events and initiatives.
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {people.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>
      
<div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">02</h1>
        <div className="team-description">
          <h2>Technical Team</h2>
          <p>
          The Technical Team of Energy club serves as the backbone of our sports club, this team ensures that players perform at their best, supported by the latest advancements. 
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {ishver.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>


    </div>
  );
};

export default About;
