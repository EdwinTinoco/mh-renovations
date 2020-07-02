import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from "./carousel_img/hie-heber-breakfast.jpg"
import Img2 from "./carousel_img/hie-pool.jpg"
import Img3 from "./carousel_img/hie-lobby.jpg"
import Img4 from "./carousel_img/img1.jpg"
import Img5 from "./carousel_img/lobby-2.jpg"

export default function CarouselComponent() {
   return (
      <div className="carousel-wrapper">
         <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showThumbs={false}
            interval={5000}
            transitionTime={1800}
            centerMode
         >
            <div>
               <img src={Img3} />
            </div>
            <div>
               <img src={Img2} />
            </div>
            <div>
               <img src={Img4} />
            </div>
            <div>
               <img src={Img1} />
            </div>
            <div>
               <img src={Img5} />
            </div>

         </Carousel>
      </div>
   );
}