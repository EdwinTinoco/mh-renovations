import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "./carousel_img/img1.jpg"
import Img2 from "./carousel_img/img2.jpg"
import Img3 from "./carousel_img/img3.jpg"
import Img4 from "./carousel_img/img4.jpg"
import Img6 from "./carousel_img/img6.jpg"

export default function CarouselComponent() {
   return (
      <div className="carousel-wrapper">
         <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showThumbs={false}
         >
            <div>
               <img src={Img1} />
            </div>
            <div>
               <img src={Img2} />
            </div>
            <div>
               <img src={Img3} />
            </div>
            <div>
               <img src={Img4} />
            </div>
            <div>
               <img src={Img6} />
            </div>

         </Carousel>
      </div>
   );
}