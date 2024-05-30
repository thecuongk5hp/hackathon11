import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BN1 from './image/BN1.jpg'
import BN2 from './image/BN2.jpg'
import BN3 from './image/BN3.jpg'
import BN4 from './image/BN4.jpg'
import BN5 from './image/BN5.jpg'

const Banner: React.FC = () => {
  return (
    <div className=" text-white py-4">
      <div className="container mx-auto text-center">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img src={BN1} alt="0H" />
          </div>
          <div>
            <img src={BN2} alt="12H" />
          </div>
          <div>
            <img src={BN3} alt="21H" />
          </div>
          <div>
            <img src={BN4} alt="21H" />
          </div>
          <div>
            <img src={BN5} alt="21H" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
