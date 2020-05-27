import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img2 from "../../../public/img2.jpg"

export default function CarouselComponent() {
   return (
      <div class="carousel-wrapper">
         <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showThumbs={false}
         >
            <div>
               <img src={Img2} />
            </div>
            <div>
               <img src={Img2} />
            </div>
            <div>
               <img src={Img2} />
            </div>
         </Carousel>
      </div>
   );
}