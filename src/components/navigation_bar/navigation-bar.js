import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../../static/assets/images/logo/mh_logo2.png"

export default function NavigationBar() {
   return (
      <div className="navbar-main-wrapper">
         <div className="left-column">
            <img src={Logo} alt="logo" />
         </div>

         <div className="right-column">
            <div className="links-wrapper">
               <div className="link">
                  <Link to="/">Home</Link>
               </div>
               <div className="link">
                  <Link to="/">About us</Link>
               </div>
               <div className="link">
                  <Link to="/">Service</Link>
               </div>
               <div className="link">
                  <Link to="/">Projects</Link>
               </div>
               <div className="link">
                  <Link to="/">Contact us</Link>
               </div>
               <div className="link">
                  <Link to="/">Get a quote</Link>
               </div>
            </div>
         </div>

      </div>
   )
}