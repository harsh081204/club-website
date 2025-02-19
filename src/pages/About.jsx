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
    { name: "Manas Mishra", role: "President-CHE", image: "/Members/Manas.jpg" },
    { name: "Kanishka Mishra", role: "Vice President", image: "/Members/Kanishka.jpg" },
    { name: "Aadya Agarwal", role: "Vice President-CHE", image: "/Members/Adhya.jpg" },
    { name: "Kautilya Shukla", role: "Secretary", image: "/Members/Kautilya.jpg" },
    { name: "Anshu Yadav", role: "Secretary", image: "/Members/Anshu.jpg" },
    { name: "Om Kumar Rana", role: "Secretary-CHE", image: "/Members/omKumar.jpg" },
    { name: "Mujahidul Islam", role: "Treasurer", image: "/Members/Mujahid.jpg" },
    { name: "Sneha Gupta", role: "Treasurer-CHE", image: "/Members/Sneha.jpg" },
   
  ];
   
  const Technical = [
    { name: "Shantanu", role: "Technical head", image: "/Members/Shantanu.jpg" },
    { name: "Ishver Chandra Jaiswal", role: "Web-Developer", image: "/Members/my-image.png" },
    { name: "Harsh Vardhan ", role:"Web-Developer", image: "/Members/Harshvardhan.jpg"  },
    { name: "Aryan Pratap Singh", role: "UI Designer", image: "/Members/Aryan.jpg" },
    { name: "Lakshya Keshwani", role: "Member", image: "/Members/lakshya.jpg" },
    
  ];

  const Creative = [
    { name: "Apoorva Pandey", role: "Creative Head", image: "/Members/Apoorva.jpg" },
    { name: "Karan Pratap Singh", role: "Designer Head", image: "/Members/karan.jpg" },
    { name: "Avni Agrawal", role: "Designer", image: "/Members/Avni.jpg" },
    { name: "Anand Yadav", role: "Designer", image: "/Members/Anand.jpg" },
    { name: "Vibhanshu Shrivastava", role:"Lead Editor", image: "/Members/Vibhanshu.jpg"  },
    { name: "Anant Nigam", role: "Editor", image: "/Members/Anant.png" },
    { name: "Nandini Gupta", role: "Editor", image: "/Members/Nandini.jpg" },
    { name: "Bhoomi Saini", role: "Member", image: "/Members/Bhoomi.jpg" }
    
    
  ];

  const Videographer = [
    { name: "Prakash Dixit", role: "Head Photographer", image: "/Members/Prakash.jpg" },
    { name: "Uday Gupta", role: "Member", image: "/Members/uday.jpg" },
    { name: "Ashwani Singh Senger", role: "Member", image: "/Members/Ashwani.jpeg.jpg" },
    { name: "Pratyush Gupta", role: "Member", image: "/Members/Pratyush.jpg" },
    { name: "Anubhav Pathak", role:"Member", image: "/Members/Anubhav.jpg"  },
    { name: "Harshit Arora", role: "Member", image: "/Members/Harshit.jpg" },
    { name: "Surya Pal", role: "Member", image: "/Members/Surya.jpg" },
   
  ];

  const Event = [
    { name: "Akhil Kumar Singh", role:"Event Coordinator", image: "/Members/Akhil.jpg"  },
    { name: "Jahnvi Priya", role: "Event Manager", image: "/Members/Jahnavi.jpg" },
    { name: "Swarnima Patel", role: "Event Manager", image: "/Members/Swarnima.png" },
   
  ];

  const SocialMedia = [
    { name: "Namandeep Singh", role: "", image: "/Members/Namandeep.jpeg.jpg" },
    { name: "Aman Pratap", role: "", image: "/Members/Aman.jpg" },
    // { name: "Harshvardhan Singh", role:"Web-Developer", image: "/Members/Harshvardhan.jpg"  },
    // { name: "Aryan Pratap Singh", role: "Member", image: "/Members/Aryan.jpg" },
    // { name: "Lakshya Keshwani", role: "Member", image: "/Members/lakshya.jpg" },
    
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


<div className="image-container">
  <img src={creative} alt="creative" className="background-image" />
  
  <div className="intro-section">
        <h1 className="section-number">04</h1>
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
        <h1 className="section-number">05</h1>
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
        <h1 className="section-number">06</h1>
        <div className="team-description">
          <h2>Social Media Managers</h2>
          <p>
            As a social media manager, we craft engaging content and build a strong online presence for our club. Through creativity and strategy, we connect with our community, amplify our achievements, and bring the spirit of the game to a wider audience
          </p>
        </div>
      </div>

  <div className="scroll-container">
    <div className="container">
      {SocialMedia.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  </div>
</div>








    </div>
  );
};

export default About;
