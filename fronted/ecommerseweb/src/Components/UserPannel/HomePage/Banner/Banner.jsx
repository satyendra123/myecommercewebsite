import React from 'react';
import SwiperBanner from '../../../../pages/SwiperBanner';
import Banner1 from '../../../assets/banner1.jpg'
import Banner2 from '../../../assets/banner2.png'
import Banner3 from '../../../assets/banner3.jpg'
const ParentComponent = () => {
    const imageUrls = [
        Banner1,
        Banner2,
        Banner3
    ];

    return (
        <div>
            <SwiperBanner images={imageUrls} />
        </div>
    );
}

export default ParentComponent;
