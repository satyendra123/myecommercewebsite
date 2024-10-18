import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from '../../Components/AdminPannel/AdminPage/AdminPage';
import Dashboard from '../../Components/AdminPannel/Dashboard/Dashboard';
import Product from '../../Components/AdminPannel/Product/Product';
import Order from '../../Components/AdminPannel/Order/Order';
import Payment from '../../Components/AdminPannel/Payment/Payment';
import Setting from '../../Components/AdminPannel/Setting/Setting';
import Customer from '../../Components/AdminPannel/Customer/Customer';
const AdminPageLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="customers" element={<Customer/>} />
        <Route path="products" element={<Product/>} />
        <Route path="orders" element={<Order />} />
        <Route path="payments" element={<Payment/>} />
        <Route path="settings" element={<Setting/>} />
      </Routes>
    </div>
  );
};

export default AdminPageLayout;
