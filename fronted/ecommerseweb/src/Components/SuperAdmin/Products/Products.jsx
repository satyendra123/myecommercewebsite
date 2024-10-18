/*
import React from 'react';
import Cards from '../../../pages/Cards';
import './Products.css';
import AosWrapper from '../../../pages/AosWrapper';
import image1 from '../../assets/women/women.png';
import image2 from '../../assets/women/women2.jpg';
import image3 from '../../assets/women/women3.jpg';
import image4 from '../../assets/women/women4.jpg';
import image5 from '../../assets/women/women2.jpg';

const Products = () => {
    const products = [
        { 
            image: image1,
            title: 'Women Ethnic', 
            text: 'White' 
        },
        { 
            image: image2, 
            title: 'Women Western', 
            text: 'Red' 
        },
        { 
            image: image3, 
            title: 'Googles', 
            text: 'brown' 
        },
        { 
            image: image4, 
            title: 'Fashion T-Shirt', 
            text: 'yellow' 
        },
        { 
            image: image5, 
            title: 'Fashion T-Shirt', 
            text: 'pink' 
        },
    ];

    return (
         
        <div>
            <div className="products-container">
            <AosWrapper animationType="fade-up">
        <p className="products-heading">Top selling products for you</p>
        </AosWrapper>
        <AosWrapper animationType="fade-up">
        <h1 className="products-subheading">Products</h1>
        </AosWrapper>
        <AosWrapper animationType="fade-up">
        <p className="products-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione.</p>
        </AosWrapper>
        <div className="product-section">
            {products.map((product, index) => (
                     <AosWrapper 
                     key={index} 
                     animationType="fade-up" 
                     delay={index * 200} // Staggered delay based on index
                 >
                <Cards 
                    key={index} 
                    image={product.image} 
                    title={product.title} 
                    text={product.text} 
                />
                </AosWrapper>
            ))}
        </div>
        </div>
        </div>
    );
}

export default Products;
*/

import React, { useState, useEffect } from 'react';
import Cards from '../../../pages/Cards';
import './Products.css';
import AosWrapper from '../../../pages/AosWrapper';
import image1 from '../../assets/women/women.png';
import image2 from '../../assets/women/women2.jpg';
import image3 from '../../assets/women/women3.jpg';
import image4 from '../../assets/women/women4.jpg';
import image5 from '../../assets/women/women2.jpg';
import BannerCarousel from '../../../pages/BannerCarousel'

const Products = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const products = [
        { image: image1,
             title: 'Women Ethnic', text: 'White' },
        { image: image2, title: 'Women Western', text: 'Red' },
        { image: image3, title: 'Googles', text: 'Brown' },
        { image: image4, title: 'Fashion T-Shirt', text: 'Yellow' },
        { image: image5, title: 'Fashion T-Shirt', text: 'Pink' },
    ];

    // Slider settings for mobile screens
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // 1 slide at a time for mobile
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true, 
        
    };

    return (
        <div className="products-container">
            <AosWrapper animationType="fade-up">
                <p className="products-heading">Top selling products for you</p>
            </AosWrapper>
            <AosWrapper animationType="fade-up">
                <h1 className="products-subheading">Products</h1>
            </AosWrapper>
            <AosWrapper animationType="fade-up">
                <p className="products-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione.
                </p>
            </AosWrapper>

            {/* For mobile, use BannerCarousel to show one product at a time */}
            {isMobile ? (
                <BannerCarousel settings={sliderSettings}>
                    {products.map((product, index) => (
                        <AosWrapper key={index} animationType="fade-up" delay={index * 200}>
                            <Cards image={product.image} title={product.title} text={product.text} />
                        </AosWrapper>
                    ))}
                </BannerCarousel>
            ) : (
                // For desktop, show products in a grid layout
                <div className="product-section">
                    {products.map((product, index) => (
                        <AosWrapper key={index} animationType="fade-up" delay={index * 200}>
                            <Cards image={product.image} title={product.title} text={product.text} />
                        </AosWrapper>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;

