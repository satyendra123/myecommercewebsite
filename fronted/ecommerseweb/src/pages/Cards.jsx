import React from 'react';
import './Cards.css';

const Cards = ({ image, title, text }) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={image} alt="hello" />
            </div>
            <p className="card-title">{title}</p>
            <p className="card-text">{text}</p>
        </div>
    );
}

export default Cards;
