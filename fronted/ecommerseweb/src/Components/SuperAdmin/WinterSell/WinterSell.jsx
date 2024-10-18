import React from "react";
import "./WinterSell.css";
import AosWrapper from '../../../pages/AosWrapper';
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';

import image2 from "../../assets/women/women2.jpg";
const WinterSell = () => {
  return (
    <div>
      <div className="winterSell-container">
        <div className="WinterSell-container-data">
        <AosWrapper animationType="zoom-in">
          <div className="WinterSell-image-container">
            <img src={image2} alt="" className="WinterSell-image" />
          </div>
          </AosWrapper>
          <div className="WinterSell-text">
          <AosWrapper animationType="fade-up">
            <h1 className="WinterSell-text-heading">
              Winter Sell Upto 50% Off
            </h1>
            </AosWrapper>
            <AosWrapper animationType="fade-up">
            <p className="WinterSell-text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              nemo ab fugiat, quibusdam temporibus, totam in perferendis, porro
              delectus modi molestias{" "}
            </p>
            </AosWrapper>
            <div className="WinterSell-list-container">
            <AosWrapper animationType="fade-up">
              <div className="WinterSell-list">
                <GrSecure className="WinterSell-list-icon icon-Quality"/>
                <p className="WinterSell-list-data">Quality Product</p>
              </div>
              </AosWrapper>
              <AosWrapper animationType="fade-up">
              <div className="WinterSell-list">
                <FaShippingFast className="WinterSell-list-icon icon-shippingfast"/>
                <p className="WinterSell-list-data">Fast Delivery</p>
              </div>
              </AosWrapper>
              <AosWrapper animationType="fade-up">
              <div className="WinterSell-list">
                <FaCreditCard className="WinterSell-list-icon icon-creditcard "/>
                <p className="WinterSell-list-data">Easy Payment method</p>
              </div>
              </AosWrapper>
              <AosWrapper animationType="fade-up">
              <div className="WinterSell-list">
                <FaTags className="WinterSell-list-icon icon-FaTags"/>
                <p className="WinterSell-list-data">Get Offers</p>
              </div>
              </AosWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterSell;
