import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

export default function GuestRoom() {
   return (
      <div className="lobby-main-wrapper">
         <div className="main-title">
            <h1>GUEST ROOMS</h1>
         </div>

         <div className="content">
            <div className="title-project">
               <h1>Spring Hill Inn & Suites</h1>
            </div>
            <div className="images-details">
               <div className="left-column">
                  <p className="title">Photos</p>
                  <div className="images">
                     <div className="img">
                        <img src={Kitchen001} />
                     </div>
                     <div className="img">
                        <img src={Kitchen002} />
                     </div>
                     <div className="img">
                        <img src={Kitchen005} />
                     </div>
                     <div className="img">
                        <img src={Kitchen004} />
                     </div>
                  </div>
               </div>

               <div className="right-column">
                  <p className="title">Project Details</p>
                  <div className="details">
                     <p>LOCATION: Lehi, UT</p>
                     <p>TYPE:  Guest Rooms</p>
                     <p>FEATURES:</p>
                     <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     </ul>
                     <div className="project-overview">
                        <p className="title">Project Overview</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                        non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                        consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                        auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
                        neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
                        ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
                        et eros.</p>
                     </div>

                     <div className="get-quote">
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
            </div>

            <div className="images-project">
               <h2>Before & After Photo Gallery</h2>

               <div className="images">
                  <img src={Kitchen001} />
                  <img src={Kitchen002} />
                  <img src={Kitchen005} />
                  <img src={Kitchen004} />
                  <img src={Kitchen001} />
                  <img src={Kitchen002} />
                  <img src={Kitchen005} />
                  <img src={Kitchen004} />
               </div>
            </div>
         </div>

         <hr />

         <div className="content">
            <div className="title-project">
               <h1>Holiday Inn Hotel</h1>
            </div>
            <div className="images-details">
               <div className="left-column">
                  <p className="title">Photos</p>
                  <div className="images">
                     <div className="img">
                        <img src={Kitchen001} />
                     </div>
                     <div className="img">
                        <img src={Kitchen002} />
                     </div>
                     <div className="img">
                        <img src={Kitchen005} />
                     </div>
                     <div className="img">
                        <img src={Kitchen004} />
                     </div>
                  </div>
               </div>

               <div className="right-column">
                  <p className="title">Project Details</p>
                  <div className="details">
                     <p>LOCATION: Lehi, UT</p>
                     <p>TYPE: Guest Rooms</p>
                     <p>FEATURES:</p>
                     <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     </ul>
                     <div className="project-overview">
                        <p className="title">Project Overview</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                        non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                        consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                        auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
                        neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
                        ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
                        et eros.</p>
                     </div>

                     <div className="get-quote">
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
            </div>

            <div className="images-project">
               <h2>Before & After Photo Gallery</h2>

               <div className="images">
                  <img src={Kitchen001} />
                  <img src={Kitchen002} />
                  <img src={Kitchen005} />
                  <img src={Kitchen004} />
                  <img src={Kitchen001} />
                  <img src={Kitchen002} />
                  <img src={Kitchen005} />
                  <img src={Kitchen004} />
               </div>
            </div>
         </div>

      </div>


   )
}