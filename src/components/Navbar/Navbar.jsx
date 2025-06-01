import React, { useState } from 'react'; // Import useState for managing menu state
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img src="/assets/profilepic/avatar.jpg" alt="Profile Avatar" className="logo" />

        {/* Desktop menu and contact button */}
        <ul className={`menu-items-list ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#home" className="menu-item" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#about" className="menu-item" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#" className="menu-item" onClick={toggleMenu}>SKILLS</a></li>
          <li><a href="Projects" className="menu-item" target="_blank" rel="noopener noreferrer">WORK</a></li>
         <a id='connect' href='https://www.linkedin.com/in/vaibhav-agrawal-3aa79229b/'> <button className="contact-btn">CONNECT +</button></a>
        </ul>

        {/* Mobile menu button */}
        <button className="menu-btn" onClick={toggleMenu}>
          <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
            {isMenuOpen ? "close" : "menu"} {/* Changes icon based on menu state */}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;