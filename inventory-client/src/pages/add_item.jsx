import React, { useState } from "react";
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
    createdBy: "" 
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const currentUserId = "user_id_here"; 

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
      await axios.post("http://localhost:5000/api/upload", formDataFile); 
      console.log("File uploaded successfully.");
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleUpload(); 

      await axios.post("http://localhost:5000/api/items", {
        ...formData,
        createdBy: currentUserId, 
        status: "active" 
      });

      setShowPopup(true);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="grid">
      <div className="w-full h-20 bg-black text-gray-600 flex items-center justify-start px-10">
        <h1 className="text-2xl">Add Item</h1>
      </div>

      <div className="flex items-center justify-between w-full h-16 bg-black px-10">
        <input 
          type="file" 
          name="file" 
          id="file" 
          className="hidden" 
          onChange={handleFileChange} 
        />
        <label htmlFor="file" className="flex items-center bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-500 transition">
          <FiUpload /> Import Excel File
        </label>
      </div>

      <div className="items-center justify-center w-full h-[43rem] overflow-auto">
        <form id="form-container" onSubmit={handleSubmit} className=" w-[50vw] grid gap-3 mt-24 mb-2">
          
          <label className="text-lg">Item Name:</label>
          <input 
            type="text" 
            name="itemName" 
            value={formData.itemName} 
            onChange={handleChange} 
            required 
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-600"
          />

          <label className="text-lg">Item Company Name:</label>
          <input 
            type="text" 
            name="itemCompanyName" 
            value={formData.itemCompanyName} 
            onChange={handleChange} 
            required 
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-600"
          />

          <label className="text-lg">Item Serial No.:</label>
          <input 
            type="text" 
            name="itemSerialNo" 
            value={formData.itemSerialNo} 
            onChange={handleChange} 
            required 
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-600"
          />

          <label className="text-lg">Item Svvv No.:</label>
          <input 
            type="text" 
            name="itemSvvvNo" 
            value={formData.itemSvvvNo} 
            onChange={handleChange} 
            required 
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-600"
          />

          <label className="text-lg">Issue Date:</label>
          <input 
            type="date" 
            name="issueDate" 
            value={formData.issueDate} 
            onChange={handleChange} 
            required 
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-600"
          />
       
          <button type="submit" id="add-detail-btn" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition">
            Add
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-center p-5 rounded shadow-md">
            <h2 className="mb-2">Item Added Successfully</h2>
            <button 
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
              onClick={() => navigate("/stockitemcount")}
            >
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
