import React from "react"

import Kitchen001 from "../kitchens/images/kitchen001.jpg"
import Kitchen002 from "../kitchens/images/kitchen002.jpg"
import Kitchen004 from "../kitchens/images/kitchen004.jpg"
import Kitchen005 from "../kitchens/images/kitchen005.jpg"

export default function Lobby() {
   return (
      <div className="lobby-main-wrapper">
         <div className="title-lobby">
            <h1>SpringHill Hotel Lobby</h1>
         </div>
         <div className="content">
            <div className="images-details">
               <div className="left-column">
                  <h2>Photos</h2>
                  <div className="images">
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                  </div>
               </div>
               <div className="right-column">
                  <h2>Projects Details</h2>
                  <div className="details">
                     <p>Location: Lehi, UT</p>
                     <p>Type: Contemporary Lobby</p>
                     <p>Features:</p>
                     <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     </ul>
                     <p>Project Overview</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                     non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                     consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                     auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
                     neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
                     ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
                  et eros.</p>
                  </div>
               </div>
            </div>

            <div className="images-project">
               <h2>Before, construction and design photos gallery</h2>

               <div className="images">
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
               </div>
            </div>
         </div>
         <hr />
         <div className="content">
            <div className="images-details">
               <div className="left-column">
                  <h2>Photos</h2>
                  <div className="images">
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                     <img src={Kitchen004} />
                  </div>
               </div>
               <div className="right-column">
                  <h2>Projects Details</h2>
                  <div className="details">
                     <p>Location: Lehi, UT</p>
                     <p>Type: Contemporary Lobby</p>
                     <p>Features:</p>
                     <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     </ul>
                     <p>Project Overview</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                     non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                     consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                     auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
                     neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
                     ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
                  et eros.</p>
                  </div>
               </div>
            </div>

            <div className="images-project">
               <h2>Before, construction and design photos gallery</h2>

               <div className="images">
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
                  <img src={Kitchen004} />
               </div>
            </div>
         </div>

      </div>
   )
}