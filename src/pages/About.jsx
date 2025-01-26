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
  const Head = [
    { name: "Kartikay Gupta", role: "President", image: "/Members/Kartikay.jpg" },
    { name: "Kanishka Mishra", role: "Vice President", image: "/Members/Kanishka.jpg" },
    { name: "Kautilya Shukla", role: "Secretary", image: "/Members/Kautilya.jpg" },
    { name: "Anshu Yadav", role: "Secretary", image: "/Members/Anshu.jpg" },
   
  ];
   
  const Technical = [
    { name: "Shantanu", role: "Technical-Team head", image: "/Members/Shantanu.jpg" },
    { name: "Ishver Chandra Jaiswal", role: "Web-Developer", image: "/Members/my-image.png" },
    { name: "Harshvardhan Singh", role:"Web-Developer", image: "/Members/Harshvardhan.jpg"  },
    { name: "Aryan Pratap Singh", role: "Member", image: "/Members/Aryan.jpg" },
    { name: "Lakshya Keshwani", role: "Member", image: "/Members/lakshya.jpg" },
    
  ];

  const Creative = [
    { name: "Apoorva Pandey", role: "Creative Head", image: "/Members/Apoorva.jpg" },
    { name: "Avni Agrawal", role: "Designer Head", image: "/Members/Avni.jpg" },
    { name: "Karan Pratap Singh", role: "Designer Head", image: "/Members/karan.jpg" },
    { name: "Vibhanshu Shrivastava", role:"Lead Editor", image: "/Members/Vibhanshu.jpg"  },
    { name: "Mujahidul Islam", role: "Treasurer", image: "/Members/Mujahid.jpg" },
    { name: "Anand Yadav", role: "Designer", image: "/Members/Anand.jpg" },
    { name: "Anant Nigam", role: "Editor", image: "/Members/Anant.png" },
    { name: "Bhoomi Saini", role: "Member", image: "/Members/Bhoomi.jpg" },
    { name: "Aman Pratap", role: "Social Media Manager", image: "/Members/Aman.jpg" },
    { name: "Namandeep Singh", role: "Social Media Manager", image: "/Members/Namandeep.jpeg.jpg" },
    { name: "Nandini Gupta", role: "Editor", image: "/Members/Nandini.jpg" },
    
    
  ];

  const Videographer = [
    { name: "Prakash Dixit", role: "Head Photographer", image: "/Members/Prakash.jpg" },
    { name: "Ashwani Singh", role: "Member", image: "/Members/Ashwani.jpeg.jpg" },
    { name: "Pratyush Gupta", role: "Member", image: "/Members/Pratyush.jpg" },
    { name: "Anubhav Pathak", role:"Member", image: "/Members/Anubhav.jpg"  },
    { name: "Harshit Arora", role: "Member", image: "/Members/Harshit.jpg" },
    { name: "Uday Gupta", role: "Member", image: "/Members/uday.jpg" },
    { name: "Surya Pal", role: "Member", image: "/Members/Surya.jpg" },
   
  ];

  const Event = [
    { name: "Manas Mishra", role: "Event Head", image: "/Members/Manas.jpg" },
    { name: "Jahnvi Priya", role: "Girls Event Head", image: "/Members/Jahnavi.jpg" },
    { name: "Kavya Kesarwani", role: "Event Coordinator", image: "/Members/Kavya.jpg" },
    { name: "Akhil Singh", role:"Member", image: "/Members/Akhil.jpg"  },
    { name: "Swarnima Patel", role: "Member", image: "/Members/Swarnima.png" },
    { name: "Adhya Agrawal", role: "Member", image: "/Members/Adhya.jpg" },
    { name: "Surya Pal", role: "Member", image: "/Members/Surya.jpg" },
   
  ];





  return (
    <div>
      
      <div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">01</h1>
        <div className="team-description">
          <h2>Head Of Club</h2>
          <p>
          As the head member of a sports club, you embody where leadership meets sportsmanship. By fostering teamwork, guiding with integrity, and inspiring others, you create a culture of excellence and unity.
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {Head.map((person, index) => (
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
      {Technical.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>


<div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">03</h1>
        <div className="team-description">
          <h2>Creative Team</h2>
          <p>
          The Creative Team of our Energy Club brings vibrant ideas to life, blending sports and innovation to inspire, engage, and energize members through dynamic events and initiatives.
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {Creative.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>



<div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">04</h1>
        <div className="team-description">
          <h2>Videographer Team</h2>
          <p>
          As a sports club videographer, We capture every play with precision and preserve every moment with passion. Our work brings the excitement of the game to life, inspiring and connecting the community. 
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {Videographer.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>



<div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">05</h1>
        <div className="team-description">
          <h2>Event Manager</h2>
          <p>
          As a sports club event manager, Our mission is making every event unforgettable. Through meticulous planning and creative execution, We transform ideas into memorable experiences that unite teams and inspire the community. 
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {Event.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>




    </div>
  );
};

export default About;
