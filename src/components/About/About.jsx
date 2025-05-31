// src/components/About.jsx

import React from 'react';
import './About.css'; // Make sure this path is correct

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            {/* Replace "your-photo.jpg" with your actual image path.
              If your image is in the 'public' folder, you can use:
              src={`${process.env.PUBLIC_URL}/your-photo.jpg`}
              If imported, e.g., 'import myPhoto from '../assets/my-photo.jpg';', use:
              src={myPhoto}
            */}
            <img 
              src="https://via.placeholder.com/300/007bff/ffffff?text=Your+Photo" // Placeholder for now
              alt="Your Name" 
              className="about-image" 
            />
          </div>
          <div className="about-text">
            <p>
              Hello there! I'm **[Your Name]**, a passionate **[Your Profession/Role, e.g., Software Engineer, UX Designer, Data Scientist]** based in **[Your City/Region, e.g., Muradnagar, Uttar Pradesh, India]**.
            </p>
            <p>
              My journey in **[mention your field, e.g., web development, product design, data analytics]** began **[mention when/how, e.g., X years ago, during my academic pursuits]**. I thrive on transforming complex challenges into elegant, user-centric solutions.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;