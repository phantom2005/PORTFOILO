import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
 <footer>
    <div className="foo-row">
        <div className="foo-col">
            <img src="" alt="hi logo" class="foo-logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ut iure similique in repellat suscipit esse modi laborum minus blanditiis voluptates 
                soluta sit nobis quae magnam odit labore dolor aliquid?</p>
            </div>
            <div className="foo-col">
                <h3>OFFICE</h3>
                <p>THIS ROAD</p>
                <p>BANGLORE,UP</p>
                <p>UP,PINCODE344</p>
                <p className="foo-email-id">AGRAWALVAIBHAVBADN.@GMAIL.COM</p>
                <h4>+98777645457</h4>
            </div>
         <div className="foo-col">
           <h3>Links</h3>
           <ul>
            <li><a href="" className="foo-link">HOME</a></li>
            <li><a href="" className="foo-link">SKILLS</a></li>
            <li><a href="" className="foo-link">WORKS</a></li>
            <li><a href="" className="foo-link">CONTACT</a></li>
           </ul>
         </div>
         <div className="foo-col">
            <h3>NEWSLETTER</h3>
            <form>
      <input type="email" id="yourUniqueEmailId" name="email"  placeholder="enter your ID" required />
        </form>
         </div>
    </div>


 </footer>
  )
}

export default Footer
