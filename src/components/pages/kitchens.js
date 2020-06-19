import React from "react";

import SubscribeNewsletter from "../subscribe/subscribe-newsletter";

export default function Kitchens() {
   return (
      <div className="kitchens-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Kitchens Renovations</h1>
            </div>
         </div>

         <div className="contractors-info">
            <div className="title">
               <h2>Family and Friends Owned and Operated for over 10 years</h2>
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


         <SubscribeNewsletter />
      </div>
   )
}