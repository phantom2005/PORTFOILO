// src/components/Footer.js
import React from "react";
import { FaReact } from "react-icons/fa"; // Import the React icon
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer>
      <div className="foo-row">
        <div className="foo-col">
          {/* Make sure to provide a valid path for your logo */}
         <div className="foo-logo">
  <h3>Thank You!</h3>
  <p>
    A huge thank you for visiting my portfolio! I truly appreciate you taking the time to explore my work.
    I'm always eager to connect with fellow professionals, collaborate on exciting projects, and discuss new opportunities.
    Feel free to reach out – I'd love to hear from you!
  </p>
</div>
        </div>
        <div className="foo-col">
          <h3>WORKSTATION</h3>
          <p>KIET GROUP OF INSTITUTION</p> {/* Corrected typo */}
          <p>GHAZIABAD, UTTAR PRADESH</p>
          <p>201206</p>
   <p className="foo-email-id"><a href="mailto:agrawalvaibhavbandhan.2005@gmail.com">agrawalvaibhavbandhan.2005@gmail.com</a></p>
          <h4><a href="tel:+919918810417">+91 9918810417</a></h4>
        </div>
        {/* /////////////////////////////////////ISKO ABHI COOMENT KARDIYA FUTRE MAI JARROT PADI TOH RELESE KARDENGE  */}
        {/* <div className="foo-col">
           <h3>Links</h3>
           <ul>
             <li>
               <a href="" className="foo-link">
                 HOME
               </a>
             </li>
             <li>
               <a href="" className="foo-link">
                 SKILLS
               </a>
             </li>
             <li>
               <a href="" className="foo-link">
                 WORKS
               </a>
             </li>
             <li>
               <a href="" className="foo-link">
                 CONTACT
               </a>
             </li>
           </ul>
         </div> */}
        {/* ////////////////////////////////https://www.youtube.com/watch?v=FRRlFLfdvBE//////////////////////////////////// */}
        <div className="foo-col">
          <h3>NEWSLETTER</h3>
<form>
  <input
    type="email"
    id="yourUniqueEmailId"
    name="email"
    placeholder="enter your ID"
  />
  <button type="submit">Subscribe</button>
  </form>
        
          <div className="foo-socialicon">
     <a href="YOUR_GITHUB_PROFILE_URL_HERE" target="_blank" rel="noopener noreferrer">
  <img src="/assets/sklog/github.webp" alt="GitHub" className="foo-icon" />
</a>



<a href="https://www.instagram.com/agrawal_ji.?igsh=MW5scnkwN3JnYWlqYQ==" target="noopener noreferrer">
  <img src="/assets/sklog/instagram.jpg" alt="Instagram" className="foo-icon" />
</a>

<a href="https://www.linkedin.com/in/vaibhav-agrawal-3aa79229b/" target="_noopener noreferrer">
  <img src="/assets/sklog/linkdin.webp" alt="LinkedIn" className="foo-icon" />
</a>
             
<a href="https://x.com/varricvaibhav?t=GKPeHe4RLBiCDCNQzN0lWg&s=09" target="noopener noreferrer">
  <img src="/assets/sklog/xlog.webp" alt="X (formerly Twitter)" className="foo-icon" />
</a>
          </div>
        </div>
      </div>

      {/* New section for "Made with" animation */}
      <div className="made-with-section">
        <p>
          Made with <span className="heart-static">❤️</span> and{' '}
          <span className="react-spin">
            <FaReact />
          </span>{' '}
          React.js
        </p>
        <p>&copy; {currentYear} VAIBHAV AGRAWAL. MODE:CODE:FUN.</p>
      </div>
    </footer>
  );
};

export default Footer;