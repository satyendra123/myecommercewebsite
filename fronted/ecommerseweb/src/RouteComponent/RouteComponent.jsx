import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperadminPageLayOut from "../Layout/SuperadminPageLayout/SuperadminPageLayout";
import AdminPageLayout from '../Layout/AdminPageLayout/AdminPageLayout';
import UserPageLayout from '../Layout/UserPageLayout/UserPageLayout';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/*" element={<UserPageLayout/>} />
        <Route exact path="/superadmin" element={<SuperadminPageLayOut />} />
        <Route path="/admin/*" element={<AdminPageLayout />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
