import React from 'react';
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar';
import Banner from '../../Components/SuperAdmin/Banner/Banner';
import Products from '../../Components/SuperAdmin/Products/Products';
import TopProducts from '../../Components/SuperAdmin/TopProducts/TopProducts';
import WinterSell from '../../Components/SuperAdmin/WinterSell/WinterSell';
import GetNotification from '../../Components/SuperAdmin/GetNotification/GetNotification';
import Testimonial from '../../Components/SuperAdmin/Testimonial/Testimonial';

const SuperadminPageLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <TopProducts />
      <WinterSell />
      <GetNotification />
      <Products />
      <Testimonial />
    </div>
  );
}

export default SuperadminPageLayout;
