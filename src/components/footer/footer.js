import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
   return (
      <div className="footer-main-wrapper">
         <div className="footer-content">
            <div className="left-column">
               <div className="title">
                  <h2>About Us</h2>
               </div>
               <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                  non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                  consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
               auctor sed vestibulum tellus consequat.</p>
               </div>
            </div>

            <div className="center-column">
               <div className="title">
                  <h2>Our Services</h2>
               </div>
               <div className="links-wrapper">
                  <div className="link">
                     <Link to="/">Planning & Design</Link>
                  </div>
                  <div className="link">
                     <Link to="/">Project Management</Link>
                  </div>
                  <div className="link">
                     <Link to="/">Kitchen Renovations</Link>
                  </div>
                  <div className="link">
                     <Link to="/">Bathrooms Renovations</Link>
                  </div>
               </div>
            </div>

            <div className="right-column">
               <div className="title">
                  <h2>Contact Us</h2>
               </div>

               <div className="phone-number-icon">
                  <div className="icon">
                     <FontAwesomeIcon icon="phone" />
                  </div>
                  <div className="phone">
                     <p>(801) 850-4208<br></br>
                     (801) 850-3828</p>
                  </div>
               </div>

               <div className="email-icon">
                  <div className="icon">
                     <FontAwesomeIcon icon="envelope" />
                  </div>
                  <div className="email">
                     mhrenovations2@gmail.com
               </div>
               </div>

               <div className="social-media">
                  <a href="https://www.facebook.com/MHRenovationsUtah/" target="_blank">
                     <div className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                     </div>
                  </a>

                  <div className="instagram">
                     <FontAwesomeIcon icon={faInstagram} />
                  </div>

                  <div className="google">
                     <FontAwesomeIcon icon={faGoogle} />
                  </div>
               </div>
            </div>
         </div>

         <div className="copyright-wrapper">
            <hr />
            <div className="info">
               &copy; 2020 M&H Renovations &#124; All rights reserved &#124; Webmoun Co.
            </div>
         </div>
      </div>
   )
}