import React, { useState } from "react";
import "../style/issued_item_info.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const issued_item_info = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleReturn = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="item-info-heading">
        <Link to="/issueditemcount">
          {" "}
          <IoMdArrowRoundBack />
        </Link>
        <h1> Issued Item Information</h1>
      </div>
      <div className="item-info-wrapper">
        <div className="item-info-container">
          <div className="input-group">
          <div className="input-row">
              <label>Faculty Name : </label>
              <input type="text" value="Alex Choudhary" readOnly />
            </div>
            <div className="input-row">
              <label>Faculty Email : </label>
              <input type="email" value="alex@email.com" readOnly />
            </div>
            <div className="input-row">
              <label>Faculty Contact No. : </label>
              <input type="number" value="9551623212" readOnly />
            </div>
            <div className="input-row">
              <label>Faculty Department Name : </label>
              <input type="text" value="Btech (CSE)" readOnly />
            </div>
            <div className="input-row">
              <label>Faculty Branch Name : </label>
              <input
                type="text"
                value="Computer Science & Engineering"
                readOnly
              />
            </div>
            <div className="input-row">
              <label>Faculty Institute Name : </label>
              <input
                type="text"
                value="Shri Vaishnav Institute Of Information Technology"
                readOnly
              />
            </div>

            <div className="input-row">
              <label>Issue Date : </label>
              <input type="date" value="08-04-2024" readOnly />
            </div>
            <div className="input-row">
              <label>Return Date : </label>
              <input type="date" value=" " />
            </div>
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
              <label>Item Svvv No. : </label>
              <input type="text" value="2024SVVVCSE101" readOnly />
            </div>
            <div className="input-row">
              <label>Item Serial No. : </label>
              <input type="text" value="2024SVVVCSE101" readOnly />
            </div>
          </div>
          <button id="return-issued-item-btn" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Return Successfully</h2>
            <button onClick={() => navigate("/issueditemcount")}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default issued_item_info;

