import React, { useState } from "react";
import "../style/sidebar.scss";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={"/assets/logo.jpg"} alt="" />
          <h2>SvvvInvento</h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" id="hover">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/stockitemcount" activeClassName="active" id="hover">
                Stock Item Count
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/issueditemcount"
                activeClassName="active"
                id="hover"
              >
                Issued Item Count
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pastissuedhistory"
                activeClassName="active"
                id="hover"
              >
                Past Issued History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pastdiscontinueditem"
                activeClassName="active"
                id="hover"
              >
                Past Discontinued Item History
              </NavLink>
            </li>
            <li>
              <NavLink to="/issueitemform" activeClassName="active" id="hover">
                Issue Item Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/additem" activeClassName="active" id="hover">
                Add Item
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-profile">
          <div className="profile-section">
            <img src={"/assets/profile.jpeg"} alt="Profile" />
            <span>Aditya Patel</span>
            <div className="profile-dropdown">
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/changepassword">Change Password</Link>
                </li>
                <li>
                  <Link to="/adminprofile">Admin Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
