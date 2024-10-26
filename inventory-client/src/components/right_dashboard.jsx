import { useEffect, useState } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import "../style/right_dashboard.scss";
import Hero from "../components/hero";
import Dashboard_items from "../components/dashboard_items";
import Stock_item_count from "../pages/stock_item_count";
import Add_item from "../pages/add_item";
import Issue_item_form from "../pages/issue_item_form";
import Issued_item_count from "../pages/issued_item_count";
import Past_discontinued_item from "../pages/past_discontinued_item_history";
import Past_issued_history from "../pages/past_issued_history";
import Admin_profile from "../pages/admin_profile";
import Change_password from "../pages/change_password";
import Stock_item_info from "../pages/stock_item_info";
import Past_item_info from "../pages/past_item_info";
import Past_dis_item_history_more_info from "../pages/past_dis_item_history_more_info";
import Issued_item_info from "../pages/issued_item_info";
import About_us from "../pages/about_us";

const RightDashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized && window.location.pathname === "/") {
      navigate("/Dashboard");
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="main-dashboard">
      <Routes>
        <Route path="Dashboard" element={<Dashboard_items />} />
        <Route path="stockitemcount" element={<Stock_item_count />} />
        <Route path="additem" element={<Add_item />} />
        <Route path="issueitemform" element={<Issue_item_form />} />
        <Route path="issueditemcount" element={<Issued_item_count />} />
        <Route path="pastdiscontinueditem" element={<Past_discontinued_item />} />
        <Route path="pastissuedhistory" element={<Past_issued_history />} />
        <Route path="adminprofile" element={<Admin_profile />} />
        <Route path="changepassword" element={<Change_password />} />
        <Route path="hero" element={<Hero />} />
        <Route path="stockiteminfo" element={<Stock_item_info />} />
        <Route path="pastitemhistory" element={<Past_dis_item_history_more_info />} />
        <Route path="issuediteminfo" element={<Issued_item_info />} />
        <Route path="pastiteminfo" element={<Past_item_info />} />
        <Route path="aboutus" element={<About_us />} />
      </Routes>
    </div>
  );
};

export default RightDashboard;
