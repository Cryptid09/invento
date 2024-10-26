import React, { useState } from "react";
import "../style/stock_item_info.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const stock_item_info = () => {
  return (
    <>
      <div className="item-info-heading">
        <Link to="/stockitemcount">
          {" "}
          <IoMdArrowRoundBack />
        </Link>
        <h1> Stock Item Information</h1>
      </div>
      <div className="item-info-wrapper">
        <div className="item-info-container">
          <div className="input-group">
            <div className="input-row">
              <label>Item Name : </label>
              <input type="text" value="Laptop" readOnly />
            </div>
            <div className="input-row">
              <label>Item Company Name : </label>
              <input type="text" value="Dell" readOnly />
            </div>
            <div className="input-row">
              <label>Serial No. : </label>
              <input type="text" value="202020" readOnly />
            </div>
            <div className="input-row">
              <label>SVVV Code No. : </label>
              <input type="text" value="2024SVVVCSE101" readOnly />
            </div>
            <div className="input-row">
              <label>Issue Date : </label>
              <input type="date" value="08-04-2024" readOnly />
            </div>
            <div className="input-row">
              <label>Admin Name : </label>
              <input type="text" value="Alex Choudhary" readOnly />
            </div>
            <div className="input-row">
              <label>Admin Email : </label>
              <input type="email" value="alex@email.com" readOnly />
            </div>
            <div className="input-row">
              <label>Admin Contact No. : </label>
              <input type="number" value="9551623212" readOnly />
            </div>
            <div className="input-row">
              <label>Admin Department Name : </label>
              <input type="text" value="Btech (CSE)" readOnly />
            </div>
            <div className="input-row">
              <label>Admin Branch Name : </label>
              <input
                type="text"
                value="Computer Science & Engineering"
                readOnly
              />
            </div>
            <div className="input-row">
              <label>Admin Institute Name : </label>
              <input
                type="text"
                value="Shri Vaishnav Institute Of Information Technology"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default stock_item_info;
