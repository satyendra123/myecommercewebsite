import React, {useState, useEffect} from 'react';
import './Banner.css'
import image1 from '../../assets/hero/sale.png';
import image2 from '../../assets/hero/shopping.png'
import image3 from '../../assets/hero/women.png'
import AosWrapper from '../../../pages/AosWrapper';

const Banner = () => {

    // Data for the images, headings, and paragraphs
    const imageData = [
        {
            id:1,
            img: image1,
            title: '70% Off on All Products',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam laboriosam veritatis assumenda culpa explicabo ut molestias vel reprehenderit distinctio.',
        },
        {
            id:2,
            img: image2,
            title: 'Exciting Shopping Experience!',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explore our exclusive deals on top fashion brands.',
        },
        {
            id:3,
            img: image3,
            title: 'Exclusive Women’s Collection',
            description: 'Discover the latest trends and styles for women with our exclusive collection.',
        },
    ];

    const sliderSettings = {
        dots: true,
        autoplay: true,
        showArrows: true
    };


    // State to determine if the screen is mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {/* background color */}
           <div className="banner-container">
            {/* background pattern  */}
            <div className="custom-background"></div>
            {/* hero section  */}
                                <div className="banner-hero-section">
                        
                                {isMobile ? (
                        <div className="banner-text-section">
                            <h1 className="banner-heading">{imageData[0].title}</h1>
                            <AosWrapper animationType="fade-up">
                                <p className="banner-paragraph">{imageData[0].description}</p>
                            </AosWrapper>
                        </div>
                    ) : (
                        <div className="banner-text-section">
                            <h1 className="banner-heading">{imageData[0].title}</h1>
                            <p className="banner-paragraph">{imageData[0].description}</p>
                        </div>
                    )}
                                 <div className="banner-image-section">
                                       <img src={imageData[0].img} alt="sell" className="image1" />
                                 </div>
                            </div>
            </div>
        </div>
    );
}

export default Banner;
