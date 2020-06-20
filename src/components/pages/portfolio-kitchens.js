import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

export default function PortfolioKitchens() {
   return (
      <div className="portfolio-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Portfolio - Kitchens</h1>
            </div>
         </div>

         <div className="squares-wrapper">
            {/* <div className="square">
               <Link to="/portfolio/kitchens">
                  <div className="img">
                     <img src={Kitchen001} />
                  </div>
               </Link>

               <div className="read-more">
                  <a href="/portfolio/kitchens">+ Read More</a>
               </div>
            </div> */}
         </div>
      </div>
   )
}