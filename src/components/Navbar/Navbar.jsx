import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img src="/assets/profilepic/avatar.jpg" alt="Profile Avatar" className="logo" />

        <ul className="menu-items-list">
          <li><a href="#home" className="menu-item">HOME</a></li>
          <li><a href="#about" className="menu-item">ABOUT</a></li>
          <li><a href="#skills" className="menu-item">SKILLS</a></li>
          <li><a href="#Projects" className="menu-item">WORK</a></li> {/* Removed target="_blank" to enable smooth scroll */}
          <li><a href="#certifications" className="menu-item">CERTIFICATIONS</a></li> {/* Added Certifications link */}
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