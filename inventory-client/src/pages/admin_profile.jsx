import React, { useState } from 'react';
import '../style/admin_profile.scss'
import { useNavigate } from "react-router-dom";

const admin_profile = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleupdateprofile = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

    const [name, setName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminContact, setAdminContact] = useState('');
  const [adminBranch, setAdminBranch] = useState('');
  const [adminDepartment, setAdminDepartment] = useState('');
  const [adminInstitute, setAdminInstitute] = useState('');

  // Function to handle profile update
  const handleUpdateProfile = () => {
    // Implement logic to update the profile
    // For now, let's just log the updated details
    console.log({
      name,
      adminId,
      adminEmail,
      adminContact,
      adminBranch,
      adminDepartment,
      adminInstitute
    });
  };
  return (
    <>
<div className="admin-profile-container">
      <h1>Admin Profile</h1>
      <div className="input-group">
        <div className="input-row">
          <label>Name : </label>
          <input type="text" value='Aditya Patel' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Id : </label>
          <input type="text" value='2024SVVVCSE001' onChange={(e) => setAdminId(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Email : </label>
          <input type="email" value='aditya@gmail.com' onChange={(e) => setAdminEmail(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Contact : </label>
          <input type="tel" value='9764312651' onChange={(e) => setAdminContact(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Branch : </label>
          <input type="text" value='Btech(CSE)' onChange={(e) => setAdminBranch(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Department : </label>
          <input type="text" value='Computer Science & Engineering' onChange={(e) => setAdminDepartment(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Admin Institute : </label>
          <input type="text" value='Shri Vaishnav Institute Of Information Technology' onChange={(e) => setAdminInstitute(e.target.value)} />
        </div>
      </div>
      <button id="change-update-btn" onClick={handleupdateprofile}>Update</button>
    </div>
    {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Profile  Updated Successfully!</h2>
            <button onClick={() => handleClosePopup() }>Back</button>
          </div>
        </div>
      )}
    </>
  )
}

export default admin_profile
