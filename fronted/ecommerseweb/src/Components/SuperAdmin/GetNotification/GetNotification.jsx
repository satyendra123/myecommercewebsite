import React from 'react';
import './GetNotification.css'
import AosWrapper from '../../../pages/AosWrapper';
const GetNotification = () => {
    return (
        <div>
            <AosWrapper animationType='zoom-in'>
            <div className="GetNotification-container">
               <h1 className="GetNotification-heading">Get Notified About New Products</h1>
               <AosWrapper animationType='fade-up'>
               <input type="text" className="GetNotification-input"/>
               </AosWrapper>
               </div>
               </AosWrapper>
        </div>
    );
}

export default GetNotification;
