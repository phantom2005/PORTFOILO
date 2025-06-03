import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets2/avatar/dickpic.jpg';
import hoverImage from '../../assets2/avatar/avatar.jpg';
import './Hero.css';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <div className="hero-text-container">

          <h1 className="hero-greeting">Hi, I am</h1>

          <h2 className="hero-name">Vaibhav</h2>

          <h3 className="hero-skills">
            <span className="hero-skills-prefix">I am </span>
            <ReactTypingEffect
              text={[
                'A Developer', 'a Problem Solver',
                'A Creative Person',
                'An Engineer', 'A Strategist',
                'A Coder', 'A Maker', 'A Technologist',
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

          <p className="hero-description">
            Computer Science (AI), KIET Group of Institutions '27 || Full-Stack Web Development (MERN) || Data Structures & Algorithms (DSA) || Python, Java, C, C++ || SQL, PostgreSQL, MongoDB || Docker || Prompt Engineer || SDET Enthusiast || AI/ML Interest || Member @ Technocrats
          </p>

          <div className="hero-buttons-container">
            <a
              href="https://drive.google.com/file/d/1YcB2A5ZDvC5qsIcQA4-D9w9AUnjYu5wf/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cv-button"
            >
              DOWNLOAD CV
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-agrawal-3aa79229b/"
              target="_blank" // Added target="_blank" and rel for consistency with Navbar's CONNECT+
              rel="noopener noreferrer"
              className="hero-connect-button"
            >
              CONNECT+
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div
            className={`flip-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={profileImage}
                  alt="Vaibhav's Profile"
                  className="hero-profile-image"
                />
              </div>

              <div className="flip-card-back">
                <img
                  src={hoverImage}
                  alt="Vaibhav Hover"
                  className="hero-profile-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;