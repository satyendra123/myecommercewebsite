import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Make sure you import Autoplay this way in new versions
import 'swiper/css'; // Basic Swiper styles

{/*
const SwiperBanner = () => {
    return (
        <div>
            <header>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </header>
        </div>
    );
}

export default SwiperBanner;
*/}

const SwiperBanner = ({ images }) => {
    return (
        <div>
            <header>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '500px' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </header>
        </div>
    );
}

export default SwiperBanner;
