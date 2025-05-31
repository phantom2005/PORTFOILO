import React, { useState } from 'react'; // Import useState hook
import ReactTypingEffect from 'react-typing-effect';
// Removed Tilt as we're implementing custom flip animation
import profileImage from '../../assets2/avatar/avatar.jpg'; // Make sure this path is correct: src/assets/profile2.png
import hoverImage from '../../assets2/avatar/avatar.jpg';     // Make sure this path is correct: src/assets/photo.png
import './Hero.css'; // Import the CSS file for styling

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover for flip animation

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left Side - Text Content */}
        <div className="hero-text-container">
          {/* Greeting */}
          <h1 className="hero-greeting">Hi, I am</h1>
          {/* Name */}
          <h2 className="hero-name">Vaibhav Agrawal</h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="hero-skills">
            <span className="hero-skills-prefix">I am a </span>
            <ReactTypingEffect
              text={[
                'Developer','Problem Solver',
                'Creative Person',
                'Engineer ','Strategist',
                'Coder','Maker','Technologist',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="hero-cursor">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="hero-description">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Buttons Container */}
          <div className="hero-buttons-container">
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cv-button"
            >
              DOWNLOAD CV
            </a>
            {/* Connect+ Button */}
            <a
              href="#contact" // Link to your contact section or social media
              className="hero-connect-button"
            >
              CONNECT+
            </a>
          </div>
        </div>

        {/* Right Side - Image Container with Flip Effect */}
        <div className="hero-image-container">
          {/* Flip Card Container */}
          <div
            className={`flip-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Inner part of the flip card that rotates */}
            <div className="flip-card-inner">
              {/* Front side of the card (default profile image) */}
              <div className="flip-card-front">
                <img
                  src={profileImage}
                  alt="Tarun Kaushik Profile"
                  className="hero-profile-image"
                />
              </div>
              {/* Back side of the card (image on hover) */}
              <div className="flip-card-back">
                <img
                  src={hoverImage} // This is the image from src/assets/photo.png
                  alt="Tarun Kaushik Hover"
                  className="hero-profile-image" // Reuses the same styling for consistency
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;