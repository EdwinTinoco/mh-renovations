import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Kitchen1 from "../home/content/kitchen-1.jpg"
import Bathroom1 from "../home/content/bathroom-1.jpg"
import Basement1 from "../home/content/basement-1.jpg"
import House1 from "../home/content/house-1.jpg"

import ComfortInn from "../home/brands/comfort-inn.png"
import HamptonInn from "../home/brands/hampton-inn.png"
import HolidayInn from "../home/brands/hi.png"
import HolidayInnEx from "../home/brands/holiday-inn-ex.png"
import SleepInn from "../home/brands/sleep-inn.png"
import SpringHill from "../home/brands/springhill.png"

import CarouselComponent from "../home/carousel"
import SubscribeNewsletter from "../subscribe/subscribe-newsletter";

export default function Home() {
   return (
      <div className="home-main-wrapper">
         <CarouselComponent />

         <div className="some-categories-wrapper">
            <div className="category">
               <Link to="/service/kitchens">
                  <div className="img">
                     <img src={Kitchen1} />
                  </div>
               </Link>
               <div className="title">
                  <h2>Kitchens</h2>
               </div>
               <div className="description">
                  <p>Description</p>
               </div>
               <div className="read-more">
                  <a href="/service/kitchens">+ Read More</a>
               </div>
            </div>

            <div className="category">
               <Link to="/">
                  <div className="img">
                     <img src={Bathroom1} />
                  </div>
               </Link>
               <div className="title">
                  <h2>Bathrooms</h2>
               </div>
               <div className="description">
                  <p>Description</p>
               </div>
               <div className="read-more">
                  <a href="/">+ Read More</a>
               </div>
            </div>

            <div className="category">
               <Link to="/">
                  <div className="img">
                     <img src={Basement1} />
                  </div>
               </Link>
               <div className="title">
                  <h2>Basements</h2>
               </div>
               <div className="description">
                  <p>Description</p>
               </div>
               <div className="read-more">
                  <a href="/">+ Read More</a>
               </div>
            </div>

            <div className="category">
               <Link to="/">
                  <div className="img">
                     <img src={House1} />
                  </div>
               </Link>
               <div className="title">
                  <h2>Whole House</h2>
               </div>
               <div className="description">
                  <p>Description</p>
               </div>
               <div className="read-more">
                  <a href="/">+ Read More</a>
               </div>
            </div>
         </div>

         <div className="hero-content-wrapper">
            <div className="contractors-info">
               <div className="main-title">
                  <h1>Your M&H Renovations Hotel and Residency Contractors</h1>
               </div>
               <div className="title">
                  <h2>Family and Friends Owned and Operated for over 10 years</h2>
               </div>
               <div className="hero-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                  non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                  consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                  auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
                  neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
                  ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
                  et eros. Cras gravida, felis sed sagittis convallis, nulla ante vehicula
                  justo, id imperdiet enim nisi id mauris. Nunc egestas volutpat congue.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
               purus eu enim vulputate rhoncus</p>
               </div>
            </div>

            <div className="virtual-budget-consultation">
               <div className="title">
                  <h2>Free Virtual Design and Budget Consultations</h2>
               </div>
               <div className="schedule-link">
                  <Link to="/get-quote">Click here to schedule a time today</Link>
                  <p>We will walk you through your home and asses key design elements and budget considerations</p>
               </div>
               <div className="buttons">
                  <button type="button">
                     <div className="icon">
                        <FontAwesomeIcon icon="camera" />
                     </div>
                     <div className="button-desc">
                        Featured Projects
                        </div>
                  </button>
               </div>
            </div>

            <div className="hero-image-wrapper">
               <div className="title">
                  <h1>Stay Connected with US</h1>
               </div>
               <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                  non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                  consequat sed sagittis dolor iaculis.</p>
               </div>

               <div className="button">
                  <p>Learn More About Us</p>
                  {/* <button type="button">Learn more about Us</button> */}
               </div>
            </div>

            <SubscribeNewsletter />

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
      </div>

   )
}