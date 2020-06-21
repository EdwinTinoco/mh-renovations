import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

export default function PortfolioHotels() {
   return (
      <div className="portfolio-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Portfolio - Hotel Renovations</h1>
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="square">

               <div className="img">
                  <Link to="/portfolio/hotel/lobby">
                     <img src={Kitchen001} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel/lobby">Lobby</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/hotel/common-areas">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel/common-areas">Front Desk</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/hotel/common-areas">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel/common-areas">Guest Rooms</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/hotel/common-areas">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel/common-areas">Back Office</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/hotel/common-areas">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel/common-areas">Common Areas</Link>
               </div>
            </div>
         </div>
      </div>
   )
}