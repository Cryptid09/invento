import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "../style/dashboard_items.scss";
import { FaListAlt } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { RiChatHistoryFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";

const dashboard_items = () => {
  return (
    <>
    <div className="heading">
        <h1>Welcome Back, Aditya</h1>
      </div>
      <div className="items-wrapper">
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <FaListAlt />
            </div>
         
          </div>
          <div className="count">
            <h1>12 Items</h1>
          </div>
          <div className="item-name">
            <p>Total Item Count</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <FaArchive />
            </div>
            <h6>
              <Link to='/stockitemcount'>see more <MdNavigateNext /></Link> 
            </h6>
          </div>
          <div className="count">
            <h1>5 Items</h1>
          </div>
          <div className="item-name">
            <p>Stock Item Count</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <FaListCheck />
            </div>
            <h6>
            <Link to='/issueditemcount'>see more<MdNavigateNext /></Link> 
            </h6>
          </div>
          <div className="count">
            <h1>20 Items</h1>
          </div>
          <div className="item-name">
            <p>Issued Item Count</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <MdWorkHistory />
            </div>
            <h6>
            <Link to='/pastissuedhistory'>see more<MdNavigateNext /></Link> 
            </h6>
          </div>
          <div className="count">
            <h1>20 Items</h1>
          </div>
          <div className="item-name">
            <p>Past Issued History</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <RiChatHistoryFill />
            </div>
            <h6>
            <Link to='/pastdiscontinueditem'>see more<MdNavigateNext /></Link> 
            </h6>
          </div>
          <div className="count">
            <h1>3 Items</h1>
          </div>
          <div className="item-name">
            <p>Past Discontinued Item History</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <FaWpforms />
            </div>
            <h6>
            <Link to='/issueitemform'>see more<MdNavigateNext /></Link> 
            </h6>
          </div>
          <div className="count">
            <h1>Form</h1>
          </div>
          <div className="item-name">
            <p>Issue Items To Faculty</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-container">
            <div className="icon-wrapper">
              <BiSolidMessageSquareAdd />
            </div>
            <h6>
            <Link to='/additem'>see more <MdNavigateNext /></Link>
            </h6>
          </div>
          <div className="count">
            <h1>Form</h1>
          </div>
          <div className="item-name">
            <p>Add Item</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard_items;
