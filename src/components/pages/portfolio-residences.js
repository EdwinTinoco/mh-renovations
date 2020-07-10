import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"


export default function PortfolioResidences() {
   const [option, setOption] = useState("lobby")
   return (
      <div className="portfolio-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>PORTFOLIO: Home Renovations</h1>
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="square">

               <div className="img">
                  <Link to="/portfolio/residence/kitchens">
                     <img src={Kitchen001} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/residence/kitchens">Kitchens</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/residence/bathrooms">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/residence/bathrooms">Bathrooms</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/residence/bedrooms">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/residence/bedrooms">Bedrooms</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/residence/laundry-rooms">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/residence/laundry-rooms">Laundry Rooms</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/residence/living-areas">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/residence/living-areas">Living Areas</Link>
               </div>
            </div>
         </div>
      
      </div>

    
   )
}