import React, { useState } from 'react'; // Import useState
import "./Navbar.css";

const Navbar = () => {
  const [showFunnyMessage, setShowFunnyMessage] = useState(false); // State for message visibility

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <a
          href="#home"
          className="logo-link"
          onMouseEnter={() => setShowFunnyMessage(true)} // Show message on hover
          onMouseLeave={() => setShowFunnyMessage(false)} // Hide message on mouse leave
        >
          <img src="/assets/profilepic/avatar.jpg" alt="Profile Avatar" className="logo" />
          {/* Conditional rendering for the funny message */}
          {showFunnyMessage && (
            <div className="logo-funny-message">
              "My code works, but I don't know why!"
              {/* Feel free to change this funny message! */}
            </div>
          )}
        </a>

        <ul className="menu-items-list">
          <li><a href="#home" className="menu-item">HOME</a></li>
          <li><a href="#about" className="menu-item">ABOUT</a></li>
          <li><a href="#skills" className="menu-item">SKILLS</a></li>
          <li><a href="#Projects" className="menu-item">WORK</a></li>
          <li><a href="#certifications" className="menu-item">CERTIFICATIONS</a></li>
          <li>
            <a id='connect' href='https://www.linkedin.com/in/vaibhav-agrawal-3aa79229b/' target="_blank" rel="noopener noreferrer">
              <button className="contact-btn">CONNECT +</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;