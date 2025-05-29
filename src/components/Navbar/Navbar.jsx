import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
  <nav className="nav-wrapper">
    <div className="nav-content">
        <img src="" alt="" className="logo" />
        <ul>
            <li><a href="" className="menu-items">HOME</a></li>
            <li><a href="" className="menu-items">SKILLS</a></li>
            <li><a href="" className="menu-items">WORK</a></li>
            <li><a href="" className="menu-items">CONTACT</a></li>
        <button className="contact-btn">HIRE ME</button>
        </ul>
        <button className="menu-btn" onClick={()=>{}}>
            <span className={"material-symbol-outlined"} style={{fontSize:"1.8rem"}}>
             
            </span>
        </button>
    </div>
  </nav>

  )
}

export default Navbar
