import React, { useState } from "react";
import "../style/change_password.scss";
import { useNavigate } from "react-router-dom";

const change_password = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlechangepasswd = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [email, setEmail] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [comfirmpassword, setConfirmpassword] = useState("");

  const handlechangepassword = () => {
    // Implement logic to update the profile
    // For now, let's just log the updated details
    console.log({
      email,
      oldpassword,
      adminEmail,
      newpassword,
      comfirmpassword,
    });
  };
  return (
    <>
      <div className="change-password-container">
        <h1>Change Password</h1>
        <div className="input-group">
          <div className="input-row">
            <label>Email : </label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Old Password : </label>
            <input
              type="text"
              value={oldpassword}
              placeholder="Enter your old password...."
              onChange={(e) => setOldpassword(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>New Password : </label>
            <input
              type="text"
              value={newpassword}
              placeholder="Enter your new password"
              onChange={(e) => setNewpassword(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Confirm Password : </label>
            <input
              type="text"
              value={comfirmpassword}
              placeholder="Re-enter your New Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
        </div>
        <button id="change-update-btn" onClick={handlechangepasswd}>Update</button>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Password Changed Successfully!</h2>
            <button onClick={() => handleClosePopup() }>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default change_password;
