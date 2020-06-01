import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubscribeNewsletter() {
   return (
      <div className="sign-up-newsletter-wrapper">
         <div className="title-icon">
            <div className="icon">
               <FontAwesomeIcon icon="envelope" />
            </div>
            <h2>Sign Up to our NewsLetter</h2>
         </div>
         <div className="input-button-wrapper">
            <div className="name">
               <input type="text" placeholder="Name" />
            </div>
            <div className="email">
               <input type="text" placeholder="Email" />
            </div>
            <div className="button">
               <button type="button">Subscribe</button>
            </div>
         </div>
      </div>
   )
}