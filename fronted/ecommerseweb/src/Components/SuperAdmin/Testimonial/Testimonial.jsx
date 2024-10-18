import React from 'react';
import './Testimonial.css';
import AosWrapper from '../../../pages/AosWrapper';
import sachin from '../../assets/testimonial/sachin.jpg';
import satya from '../../assets/testimonial/satya.jpg';
import victor from '../../assets/testimonial/victor.jpg';
import virat from '../../assets/testimonial/virat.jpg';
import BannerCarousel from '../../../pages/BannerCarousel';

const Testimonial = () => {
    const products = [
        { 
            image: virat,
            title: 'Virat Kohli', 
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sapiente.' 
        },
        { 
            image: victor, 
            title: 'Sachin Tendulkar', 
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sapiente.' 
        },
        { 
            image: satya, 
            title: 'Satya Nadella', 
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sapiente.' 
        },
        { 
            image: sachin, 
            title: 'Victor', 
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sapiente.' 
        }
    ];

    const sliderSettings = {
        dots: true,
        autoplay: true,
        showArrows: true
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
                <p className="products-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sapiente Lorem ipsum dolor sit, amet consectetur</p>
            </AosWrapper>

            <AosWrapper animationType="zoom-in">
            <BannerCarousel settings={sliderSettings}>
                {products.map((product, index) => (
                    <div key={index} className="Testimonial-card-container">
                    <div key={index} className="Testimonial-card-body">
                        <div className="Testimonial-card-image">
                            <img src={product.image} alt={product.title} className="Testimonial-image1" />
                        </div>
                        <p className="Testimonial-card-paragraph">{product.text}</p>
                        <h1 className="Testimonial-card-heading">{product.title}</h1>
                    </div>
                    </div>
                ))}
            </BannerCarousel>
            </AosWrapper>
        </div>
    );
};

export default Testimonial;
