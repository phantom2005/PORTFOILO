// src/components/About.jsx

import React from 'react';
import './About.css'; // Make sure this path is correct

// 1. Import your image using a relative path
import vaibhavPhoto from '../../assets2/avatar/dppic1.jpg'; // Adjust path if 'avatar' is in a different location relative to About.jsx

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            {/* 2. Use the imported variable for the src */}
            <img
              src={vaibhavPhoto}
              alt="Vaibhav"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm Vaibhav, an aspiring innovator currently pursuing my B.Tech in **Computer Science (AI) at KIET Group of Institutions.
            </p>
            <p>
              Beyond the classroom, I'm a creative soul with a burning passion for discovery across **AI, SDET, and web development. My journey in technology is deeply intertwined with my love for exploring the unknown—a personal quest to understand how things work and how they can be made better. I thrive on translating intricate challenges into intuitive, high-impact solutions that truly make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;