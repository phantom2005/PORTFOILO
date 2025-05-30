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
          <img src="/assets/your-logo.png" alt="hi logo" className="foo-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ut
            iure similique in repellat suscipit esse modi laborum minus
            blanditiis voluptates soluta sit nobis quae magnam odit labore dolor
            aliquid?
          </p>
        </div>
        <div className="foo-col">
          <h3>WORKSTATION</h3>
          <p>KIET GROUP OF INSTITUTION</p> {/* Corrected typo */}
          <p>GHAZIABAD, UTTAR PRADESH</p>
          <p>201206</p>
          <p className="foo-email-id">AGRAWALWORKATAI@gmail.com</p>
          <h4>+98777645457</h4>
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
          </form>
          <div className="foo-socialicon">
            <img src="/assets/sklog/github.webp" alt="GitHub" className="foo-icon" />
            <img src="/assets/sklog/instagram.jpg" alt="Instagram" className="foo-icon" />
            <img src="/assets/sklog/linkdin.webp" alt="LinkedIn" className="foo-icon" />
            <img src="/assets/sklog/xlog.webp" alt="X (formerly Twitter)" className="foo-icon" />
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
        <p>&copy; {currentYear} VAIBHAV AGRAWAL.MODE FUN CODE.</p>
      </div>
    </footer>
  );
};

export default Footer;