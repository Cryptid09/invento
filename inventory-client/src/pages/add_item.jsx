import React, { useState } from "react";
import "../style/add_item.scss";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemCompanyName: "",
    itemSerialNo: "",
    itemSvvvNo: "",
    issueDate: "",
    adminName: "",
    adminContactNo: "",
    adminEmail: "",
    adminDepartmentName: "",
    adminBranchName: "",
    adminInstituteName: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formDataFile = new FormData();
      formDataFile.append("file", selectedFile);
      await axios.post("/api/upload", formDataFile); 
      console.log("File uploaded successfully.");
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/items", {
        ...formData,
        admin: {
          name: formData.adminName,
          contactNo: formData.adminContactNo,
          email: formData.adminEmail,
          departmentName: formData.adminDepartmentName,
          branchName: formData.adminBranchName,
          instituteName: formData.adminInstituteName,
        },
        status: "active" 
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <div className="heading">
        <h1>Add Item</h1>
      </div>
      <div className="search-download-btn-container">
        <input type="file" name="file" id="file" className="inputfile" onChange={handleFileChange} />
        <label htmlFor="file">
          <FiUpload /> Import Excel File
        </label>
      </div>
      <div className="form-wrapper">
        <form id="form-container" onSubmit={handleSubmit}>
          <label>Item Name :</label>
          <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />

          <label>Item Company Name :</label>
          <input type="text" name="itemCompanyName" value={formData.itemCompanyName} onChange={handleChange} required />

          <label>Item Serial No. :</label>
          <input type="text" name="itemSerialNo" value={formData.itemSerialNo} onChange={handleChange} required />

          <label>Item Svvv No. :</label>
          <input type="text" name="itemSvvvNo" value={formData.itemSvvvNo} onChange={handleChange} required />

          <label>Issue Date :</label>
          <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required />

          <label>Admin Name :</label>
          <input type="text" name="adminName" value={formData.adminName} onChange={handleChange} required />

          <label>Admin Contact No. :</label>
          <input type="text" name="adminContactNo" value={formData.adminContactNo} onChange={handleChange} required />

          <label>Admin Email :</label>
          <input type="email" name="adminEmail" value={formData.adminEmail} onChange={handleChange} required />

          <label>Admin Department Name :</label>
          <input type="text" name="adminDepartmentName" value={formData.adminDepartmentName} onChange={handleChange} required />

          <label>Admin Branch Name :</label>
          <input type="text" name="adminBranchName" value={formData.adminBranchName} onChange={handleChange} required />

          <label>Admin Institute Name :</label>
          <input type="text" name="adminInstituteName" value={formData.adminInstituteName} onChange={handleChange} required />

          <button type="submit" id="add-detail-btn">Add</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Item Added Successfully</h2>
            <button onClick={() => navigate("/stockitemcount")}>View</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddItem;
