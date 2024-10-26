import React, { useState } from "react";
import "../style/issue_item_form.scss";
import { useNavigate } from "react-router-dom";

const issue_item_form = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleissueditem = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="heading">
        <h1>Issue Item To Faculty</h1>
      </div>
      {/* <div className="search-download-btn-container">
        <div className="search-field">
          <input type="text" placeholder="Search" name="text" class="input" />
          <button className="search-btn">Search</button>
        </div>
        <button className="download-btn">Download</button>
      </div> */}
      <div className="form-wrapper">
        <div className="form-container">
          <label htmlFor="name">Faculty Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
          />
          <label htmlFor="program">Faculty Enrollment No. :</label>
          <input
            type="number"
            id="enrollmentno"
            name="enrollmentno"
            // value={formData.program}
            // onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Faculty Contact No. :</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            // value={formData.phoneNumber}
            // onChange={handleChange}
          />
          <label htmlFor="details">Faculty Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.details}
            // onChange={handleChange}
          />
          <label htmlFor="password">Faculty Branch Name :</label>
          <input
            type="text"
            id="facultybranchname"
            name="facultybranchname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Faculty Department name :</label>
          <input
            type="text"
            id="facultydepartmentname"
            name="facultydepartmentname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Faculty Institute Name :</label>
          <input
            type="text"
            id="facultyinstitutename"
            name="facultyinstitutename"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">issue Date :</label>
          <input
            type="date"
            id="issuedate"
            name="issuedate"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Return Date :</label>
          <input
            type="date"
            id="returndate"
            name="returndate"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Name :</label>
          <input
            type="text"
            id="itemname"
            name="itemname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Company Name :</label>
          <input
            type="text"
            id="itemcompanyname"
            name="itemcompanyname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Svvv No. :</label>
          <input
            type="text"
            id="itemsvvvno."
            name="itemsvvvno."
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Serial No. :</label>
          <input
            type="text"
            id="itemserialno."
            name="itemserialno."
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Remark :</label>
          <input
            type="text"
            id="remark"
            name="remark"
            // value={formData.password}
            // onChange={handleChange}
          />
          <button id="add-detail-btn" onClick={handleissueditem}>Add</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Item Issued To Faculty Successfully</h2>
            <button onClick={() => navigate("/issueditemcount")}>View</button>
          </div>
        </div>
      )}
    </>
  );
};

export default issue_item_form;
