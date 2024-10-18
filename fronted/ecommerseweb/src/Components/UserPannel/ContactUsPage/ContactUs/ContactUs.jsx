import React from 'react';
import './ContactUs.css';
import Contactimage from '../../../assets/ContactUs.jpg';

const ContactUs = () => {
    return (
        <div className="ContactUs-container">
            <img src={Contactimage} alt="Contact Us" className="Contact-image" />
            <div className="Contact-form">
                <form>
                    {/* Example form inputs */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
