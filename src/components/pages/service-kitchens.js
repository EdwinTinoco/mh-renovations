import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubscribeNewsletter from "../subscribe/subscribe-newsletter";
import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

export default function Kitchens() {
   return (
      <div className="kitchens-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Kitchen Renovations</h1>
            </div>
         </div>

         <div className="contractors-info">
            <div className="title">
               <h2>Kitchen Renovation Contractor</h2>
            </div>
            <div className="description">
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

         <div className="squares-wrapper">
            <div className="squares">
               <div className="square">
                  <div className="img-wrapper">
                     <img src={Kitchen001} alt="kitchen" />
                  </div>

                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>
               </div>

               <hr />

               <div className="square">
                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>

                  <div className="img-wrapper">
                     <img src={Kitchen004} alt="kitchen" />
                  </div>
               </div>

               <hr />
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="squares">
               <div className="square">
                  <div className="img-wrapper">
                     <img src={Kitchen002} alt="kitchen" />
                  </div>

                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>
               </div>

               <hr />

               <div className="square">
                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>

                  <div className="img-wrapper">
                     <img src={Kitchen005} alt="kitchen" />
                  </div>
               </div>
            </div>
         </div>

         <div className="get-quote">
            <Link to="/get-quote">
               <div className="button">
                  <div className="icon">
                     <FontAwesomeIcon icon="phone" />
                  </div>
                  Let's talk about your project
               </div>
            </Link>
         </div>


         <SubscribeNewsletter />
      </div>
   )
}