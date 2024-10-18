import React from 'react';
import Carousel from '../../pages/BannerCarousel';
import image1 from '../assets/women/women.png';
import image2 from '../assets/women/women2.jpg';
import image3 from '../assets/women/women3.jpg';
import image4 from '../assets/women/women4.jpg';
import image5 from '../assets/women/women2.jpg';

const Banner = () => {
    const ImageData = 
    [
        {
            'id':1,
            'Image':image1
        },
        {
            'id':2,
            'Image':image2
        },
        {
            'id':3,
            'Image':image3
        },
        {
            'id':4,
            'Image':image4
        },
        {
            'id':5,
            'Image':image5
        },
    ]
  return (
    <Carousel>
        {ImageData.map((data)=>{
            <img key={data.id} className="d-block w-100" src={data.Image} alt={`Slide ${data.id}`} />
        })}
    </Carousel>
  );
};

export default Banner;
