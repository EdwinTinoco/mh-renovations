import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubscribeNewsletter from "../subscribe/subscribe-newsletter";

export default function ContactUs() {
   return (
      <div className="contact-main-wrapper">
         <div className="main-title">
            <div className="icon">
               <FontAwesomeIcon icon="phone" />
            </div>
            <div className="title">
               <h1>Contact us</h1>
            </div>
         </div>
         <div className="form-info-wrapper">
            <div className="form-wrapper">
               <div className="title">
                  <h1>We'd love to hear from You</h1>
                  <p>If you have any questions or would like to book
                     an appointment fill out the form below or give us a call.</p>
               </div>

               <form className="form">
                  <div className="form-group">
                     <input type="text" id="name" placeholder="Name" />
                     <label htmlFor="name">Name</label>
                  </div>

                  <div className="form-group">
                     <input type="text" id="email" placeholder="Email" />
                     <label htmlFor="email">Email</label>
                  </div>

                  <div className="form-group">
                     <input type="text" id="phone" placeholder="Phone" />
                     <label htmlFor="phone">Phone</label>
                  </div>

                  <div className="form-group">
                     <textarea name="message" id="message" placeholder="Message" />
                     <label htmlFor="message">Message</label>
                  </div>

                  <div className="center-btn-wrapper">
                     <button type="submit" className="btn">Send</button>
                  </div>
               </form>

            </div>

            <div className="info-wrapper">
               <div className="icon-title">
                  <div className="icon">
                     <FontAwesomeIcon icon="map-marker-alt" />
                  </div>

                  <div className="title">
                     <h2>Provo</h2>
                  </div>
               </div>

               <div className="address">
                  <p>9999 Some Street</p>
                  <p>Provo, UT, 80000</p>
               </div>

               <div className="phone-number">
                  <p>(555) 555-5555</p>
                  <p>(555) 555-5555</p>
               </div>

               <div className="email">
                  <p>ejemplo@gmail.com</p>
               </div>

               <div className="get-quote">
                  <p>Looking To Get A Quote On Your Next Project?</p>
                  <Link to="/get-quote">
                     <div className="button">
                        <div className="icon">
                           <FontAwesomeIcon icon="calculator" />
                        </div>
                        Get a quote
                     </div>
                  </Link>
               </div>
            </div>
         </div>

         <SubscribeNewsletter />
      </div>
   )
}