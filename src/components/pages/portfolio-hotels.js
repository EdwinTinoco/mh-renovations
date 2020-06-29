import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

import ComfortInn from "../home/brands/comfort-inn.png"
import HamptonInn from "../home/brands/hampton-inn.png"
import HolidayInn from "../home/brands/hi.png"
import HolidayInnEx from "../home/brands/holiday-inn-ex.png"
import SleepInn from "../home/brands/sleep-inn.png"
import SpringHill from "../home/brands/springhill.png"

export default function PortfolioHotels() {
   const [option, setOption] = useState("lobby")
   return (
      <div className="portfolio-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Portfolio: Hotel Renovations</h1>
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="square">

               <div className="img">
                  <Link to="/portfolio/hotel-lobby">
                     <img src={Kitchen001} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel-lobby">Lobby</Link>
               </div>
            </div>

            <div className="square">
               <div className="img">
                  <Link to="/portfolio/hotel-guest-room">
                     <img src={Kitchen002} />
                  </Link>
               </div>

               <div className="read-more">
                  <Link to="/portfolio/hotel-guest-room">Guest Room</Link>
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

         <div className="brands-wrapper">
            <div className="title">
               <h2>Some brands we've worked with...</h2>
            </div>
            <div className="brand-img-wrapper">
               <div className="img">
                  <img src={ComfortInn} />
               </div>
               <div className="img">
                  <img src={HamptonInn} />
               </div>
               <div className="img">
                  <img src={HolidayInn} />
               </div>
               <div className="img">
                  <img src={HolidayInnEx} />
               </div>
               <div className="img">
                  <img src={SleepInn} />
               </div>
               <div className="img">
                  <img src={SpringHill} />
               </div>
            </div>
         </div>

      </div>
   )
}