import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageLayout from '../UserPageLayout/HomePageLayout/HomePageLayout';
import ProductPageLayout from '../UserPageLayout/ProductPageLayout/ProductPageLayout'
import CategoryPageLayout from '../UserPageLayout/CategoryPageLayout/CategoryPageLayout';
import ContactUsPageLayout from '../UserPageLayout/ContactUsPageLayout/ContactUsPageLayout';
import SignUpPageLayout from '../UserPageLayout/SignUpPageLayout/SignUpPageLayout';
import LogInPageLayout from '../UserPageLayout/LogInPageLayout/LogInPageLayout'
import Navbar from '../../Components/UserPannel/HomePage/Navbar/Navbar'
import Footer from '../../Components/UserPannel/HomePage/Footer/Footer'

const UserPageLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/product" element={<ProductPageLayout />} />
          <Route path="/category" element={<CategoryPageLayout />} />
          <Route path="/contact-us" element={<ContactUsPageLayout />} />
          <Route path="/sign-up" element={<SignUpPageLayout />} />
          <Route path="/log-in" element={<LogInPageLayout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default UserPageLayout;
